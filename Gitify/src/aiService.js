const axios = require('axios');

const SERVER_URL = 'http://localhost:3000/generate-commit';

async function getAICommitMessage(diff, instruction) {
    try {
        const response = await axios.post(SERVER_URL, {
            diff,
            instruction
        });

        return response.data.commitMessage;
        
    } catch (err) {
        console.error("❌ Gitify Server Error:", err.response?.data?.error || err.message);
        return "Manual commit message required (Server unreachable)";
    }
}

module.exports = { getAICommitMessage };