const fs = require('fs');
const colors = require('colors');

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            throw `Base ${base} should be a number`;
        } else {
            let data = '';
            for (let i = 1; i <= limit; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`File tables/table-${base}.txt has been generated`);
                }
            });
        }
    });
};

let list = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            throw `Base ${base} should be a number`;
        } else {
            let data = '';
            for (let i = 1; i <= limit; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            console.log(`table of ${base}`.green);
            resolve(data);
        }
    });
};



module.exports = {
    createFile,
    list
};
