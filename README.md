# Gitify-ai

[![NPM Version](https://img.shields.io/npm/v/git-ai-helper)](https://www.npmjs.com/package/git-ai-helper)

**Gitify-ai** is a smart Git CLI tool that supercharges your commit workflow. It automatically generates **professional, AI-powered commit messages** using Google's Gemini, stages changes, commits per file, and pushes to your branch—all with simple interactive prompts.

## 🚀 Quick Demo
```
cd your-git-repo
gitify
```
```
Staging changes...
Analyzing: src/main.js...
Suggestion: \"Refactor authentication logic to use async/await\"
Accept? (y/n): y
Branch: [master, testbranch]
Which branch are you pushing in? testbranch
Pushing to origin/main... Success!
```

## ✨ Key Features
- **AI Commit Messages**: One-sentence, professional summaries per file (new/modified/deleted).
- **Fully Automated**: Stage → AI message → Commit → Push.
- **Interactive Control**: Approve, regenerate AI suggestion, or manual edit.
- **Branch Sync**: Lists & pushes to any local/remote branch.
- **Secure Proxy**: Uses deployed Gemini server—no API key in CLI.
- **Lightweight**: Pure Node.js (~3 deps).

## 🛠️ Tech Stack
```
CLI: Node.js | simple-git | Axios
Server: Express | @google/generative-ai (Gemini 1.5 Flash)
```

## 📦 Installation

### Global CLI (Recommended)
```bash
npm install -g git-ai-helper
gitify  # Use anywhere!
```

## ⚙️ Usage

1. **Navigate to Git repo** (new or existing).
2. **Make changes**.
3. **Run**:
   ```bash
   gitify
   ```
4. **Follow prompts**:
   - Select push branch.
   - Review/approve AI messages per file.
   - Auto-push!

### Works With:
- New projects: `git init && git remote add origin <url>`
- Cloned repos: Just `gitify` after changes.

## 🤖 How AI Works
1. CLI sends file diff → **Remote Proxy** (https://gitify-ai.onrender.com).
2. Proxy generates via **Gemini**: `"Summarize this code change in 1 professional sentence."`
3. Returns clean message: e.g., `"Fix user profile validation edge case"`

## 📁 Project Structure
```
Gitify-ai/              # Monorepo root
├── Gitify/             # CLI package (npm publishable)
│   ├── index.js        # CLI entrypoint
│   ├── package.json    # bin: {gitify: "./index.js"}
│   └── src/
│       ├── gitManager.js  # Git ops (stage/commit/push)
│       ├── aiService.js   # Gemini proxy calls
│       └── cliHelper.js   # Prompts
├── git-server/         # API proxy (Express)
│   ├── server.js       # /generate-commit endpoint
│   └── package.json
├── README.md           # This!
└── .gitignore
```

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

## 📊 Stats
- **Size**: ~50KB (CLI)
- **Deps**: Minimal (simple-git, axios, dotenv)
- **API**: Free tier Gemini (generous limits)

## 📄 License
ISC (see Gitify/package.json)

## 🙌 Thanks
Built with ❤️ for devs tired of boring commits.

**Star on GitHub | [Install](https://www.npmjs.com/package/git-ai-helper) | Questions? Open Issue!**

