# 🤖 GIT-AI-HELPER

A minimal, terminal-native CLI tool built with **Node.js**.  
It allows users to automatically generate professional, one-sentence commit messages instantly based on code changes using AI.  
Automates the git actions (add -> commit -> push) with a single comand while having a control over it.

## ✨ Features
- Generate atomic commit messages file-by-file  
- Interactive prompts to accept, regenerate, or edit messages  
- Auto-stages and auto-pushes to your remote repository  
- Securely powered by a remote proxy server  

## 🛠️ Tech Stack
- **Node.js** (Runtime)  
- **Simple-Git** (Git automation)  
- **Axios** (API requests)  
- **Gemini API** (AI integration)  

## ⚙️ Setup & Installation
1. Install the package globally via npm:
   ```bash
   npm install -g git-ai-helper
   ```
2. Navigate to your local git repository:
   ```bash
   cd your-project-folder
   ```
3. Run the tool to analyze changes and generate commits:
   ```bash
   gitify
   ```

#### NPM Package 👉 https://www.npmjs.com/package/git-ai-helper

## 💡 Usage Requirements
- **New Projects:** Run `git init`, add your GitHub remote (`git remote add origin <link>`), and run `gitify`.
- **Cloned Projects:** Make your changes and simply run `gitify`.
- **Note:** Git must be installed and initialized on your system.