const { simpleGit } = require('simple-git');
const git = simpleGit();

const gitManager = {
    ensureRoot: async () => {
        try {
            const root = await git.revparse(['--show-toplevel']);
            git.cwd(root); 
        } catch (err) {
            console.error("Not a git repository.");
            process.exit(1);
        }
    },

    stageAll: () => git.add('.'),
    
    getStatus: () => git.status(),
    
    fetch: () => git.fetch(),
    
    getBranches: async () => {
        const branchInfo = await git.branch(['-a']);
        const allNames = branchInfo.all.map(n => n.replace('remotes/origin/', ''));
        return {
            unique: [...new Set(allNames)],
            current: branchInfo.current
        };
    },

    getDiff: (filePath, isNew) => {
        return isNew ? git.show([`:${filePath}`]) : git.diff(['--staged', filePath]);
    },

    commit: (msg, file) => git.commit(msg, file),
    
    push: (local, remote) => git.push('origin', `${local}:${remote}`)
};

module.exports = gitManager;