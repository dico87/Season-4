const { argv } = require('./config/yargs')
const colors = require('colors');
const { createFile } = require('./modules/multiply');
const { list } = require('./modules/multiply');

let command = argv._[0];
let base = argv.base;
let limit = argv.limit;

switch (command) {
    case 'list':
        list(base, limit)
            .then(message => console.log(message))
            .catch(err => console.log(err));
        break;
    case 'create':
        createFile(base, limit)
            .then(message => console.log(message.blue))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`Command ${command} not valid`);
        break;
}
