# git-ai-helper

AI-powered git commit messages for your daily workflow.

## Installation

Install globally via npm:

```bash
npm install -g git-ai-helper
Usage
Navigate to your project folder and run:

Bash
gitify
Workflow
Analyze: The tool stages changes and analyzes code diffs.

Review: Review the AI-generated commit message.

Decide:

y: Accept and commit

n: Skip

r: Regenerate suggestion

m: Write manual message

Push: Automatically pushes to your remote repository.

Setup Requirements
New Projects
Run git init.

Create a GitHub repository.

Link it: git remote add origin <repo-link>

Run gitify.

Existing Projects
Make code changes.

Run gitify.

Features
Atomic Commits: Processes files individually for cleaner history.

Interactive Control: Approve or edit every message.

Cloud Powered: AI processing handled via remote proxy.

Zero Config: Works immediately after installation.

Prerequisites
Git must be installed and initialized.

A linked remote origin (GitHub/GitLab) is required for auto-push.

Author: Jaany