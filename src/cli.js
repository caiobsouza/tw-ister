const readline = require('readline');
const run = require('./util/run')

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Enter to twist! [or type exit]');

    const read = () => {
        rl.question('...', (answer) => {
            const twister = run(answer);
            if (twister) {
                console.log(`${twister.part} no ${twister.color}`);
                read();
            }
        });
    }

    read();
};
