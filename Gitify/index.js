#!/usr/bin/env node
require('dotenv').config();
const git = require('./src/gitManager');
const ai = require('./src/aiService');
const cli = require('./src/cliHelper');

async function main() {
    console.log("⚡ Staging changes...");
    await git.stageAll();

    const status = await git.getStatus();
    if (status.files.length === 0) {
        console.log("✅ No changes detected.");
        cli.close();
        return;
    }

    console.log("🔄 Syncing branches...");
    await git.fetch();
    const { unique, current } = await git.getBranches();
    
    console.log("\n🌿 Branches:", unique.join(', '));
    const target = await cli.ask(`Push to branch? (Default: ${current}): `) || current;

    for (const file of status.files) {
        const { path: filePath, index } = file;
        
        if (index === 'D') {
            await git.commit(`file deleted: ${filePath}`, filePath);
            continue;
        }

        const isNew = index === 'A';
        const diffData = await git.getDiff(filePath, isNew);
        const instruction = isNew ? "New file created. Describe it." : "File modified. Summarize it.";

        let finalizedMessage = "";
        let approved = false;

        while (!approved) {
            console.log(`\n🤖 Analyzing: ${filePath}...`);
            const aiMsg = await ai.getAICommitMessage(diffData, instruction);
            console.log(`✨ Suggestion: "${aiMsg}"`);

            const ans = (await cli.ask("Accept? (y/n): ")).toLowerCase();
            if (ans === 'y') {
                finalizedMessage = aiMsg;
                approved = true;
            } else {
                const choice = (await cli.ask("[r]egenerate or [m]anual? ")).toLowerCase();
                if (choice === 'm') {
                    finalizedMessage = await cli.ask("Enter message: ");
                    approved = true;
                }
            }
        }
        await git.commit(finalizedMessage, filePath);
    }

    console.log(`🚀 Pushing to origin/${target}...`);
    try {
        await git.push(current, target);
        console.log("🎉 Success!");
    } catch (e) {
        console.error("❌ Push failed.");
    }

    cli.close();
}

main();