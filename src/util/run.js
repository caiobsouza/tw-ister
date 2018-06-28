const twist = require('../twist');

module.exports = (command) => {
    switch (command) {
        case 'exit':
            process.exit(0);
            return false;
        default:
            return twist();
    }
};
