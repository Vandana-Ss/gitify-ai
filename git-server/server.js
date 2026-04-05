const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

async function generateWithRetry(prompt, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text().trim();
        } catch (err) {
            if (err.status === 503 && i < retries - 1) {
                const waitTime = (i + 1) * 2000;
                console.log(`Busy, retrying in ${waitTime/1000}s...`);
                await new Promise(res => setTimeout(res, waitTime));
                continue;
            }
            throw err;
        }
    }
}

app.get('/', (req, res) => {
    res.send("Gitify officially LIVE in the cloud!");
});

app.get('/generate-commit', (req, res) => {
    res.send("I'm here! I'm waiting for a POST request from your CLI.");
});

app.post('/generate-commit', async (req, res) => {
    const { diff, instruction } = req.body;

    if (!diff) return res.status(400).json({ error: "No diff provided" });

    try {
        const prompt = `${instruction}\nDiff: ${diff}\nReturn only a 1-sentence professional commit message.`;
        const commitMessage = await generateWithRetry(prompt);
        
        console.log(`Generated: ${commitMessage.substring(0, 30)}...`);
        res.json({ commitMessage });
    } catch (err) {
        console.error("Server Error:", err.message);
        res.status(500).json({ error: "AI Service failed" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));