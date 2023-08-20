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
}

module.exports = new Store();