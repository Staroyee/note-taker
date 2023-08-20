const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.readFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    write(newNote) {
        return writeFileAsync('db/db.json', JSON.stringify(newNote));
    }

    getNotes() {
        return this.read().then((notes)=>{
            return JSON.parse(notes);
        }).catch((err)=>{
            console.log(err)
        });
    }
};

module.exports = new Store();