const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

class CLI {
    constructor() {
        this.rl = readline.createInterface({ input, output });
    }

    async ask(question) {
        return await this.rl.question(question);
    }

    close() {
        this.rl.close();
    }
}

module.exports = new CLI();