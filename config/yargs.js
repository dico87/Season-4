const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'show multiply table without save', options)
    .command('create', 'create file with multiply table', options)
    .help()
    .argv;

module.exports = {
    argv
}