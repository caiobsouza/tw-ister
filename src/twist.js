const constants = require('./util/constants');

module.exports = () => {
    return {
        part: constants.parts[Math.floor(Math.random() * constants.parts.length)],
        color: constants.colors[Math.floor(Math.random() * constants.colors.length)]
    }
}