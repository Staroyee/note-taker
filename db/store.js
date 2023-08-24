//Import 'fs node module.
const fs = require('fs');
//Import 'util' node module
const util = require('util');
//Import 'uuid' node module
const uuid = require('uuid');
//Asynchronous read and write file functions.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Class for functions to call in apiRoutes.
class Store {
    //Define 'read' function.
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    //Define 'write' function.
    write(newNote) {
        return writeFileAsync('db/db.json', JSON.stringify(newNote));
    }
    //Gets notes from user input on front end.
    getNotes() {
        return this.read().then((notes)=>{
            return JSON.parse(notes);
        }).catch((err)=>{
            console.log(err)
        });
    }
    //Converts notes into an array and returns a new array of notes.
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
    //Deletes notes using the 'id' of the note clicked on the front end.
    deleteNote(id) {
        return this.getNotes().then((notes) => {
            const filteredNotes = []
            for (let i =0;i<notes.length;i++){
                if(id !== notes[i].id) {
                    filteredNotes.push(notes[i])
                }
            }
            return filteredNotes
        }).then((notesArray) => {
            return this.write(notesArray);
        });
    }
};
//Export 'Store' class and included functions.
module.exports = new Store();