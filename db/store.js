const fs = require('fs');
const util = require('util');
const uuid = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

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

    writeNote(newNote) {
        newNote.id=uuid.v4();
        return this.getNotes().then((notes) => {
            return ([...notes, newNote])
        }).then((notesArray) => {
            return this.write(notesArray);
        }).then(() => {
            return newNote;
        });
    }
};

module.exports = new Store();