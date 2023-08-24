//Assign 'router' variable the express class 'router'.
const router = require('express').Router();
//Import 'Store' class from store.js.
const store = require('../db/store')

//Handler for 'get' route.
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => {
        res.status(500).json(err)
    });
});

//Handler for 'post' route.
router.post('/notes', (req, res) => {
    store.writeNote(req.body).then((newNote) => {
        res.json(newNote);
    }).catch((err) => {
        res.status(500).json(err)
    });
});

//Handler for 'delete' route.
router.delete('/notes/:id', (req, res) => {
    store.deleteNote(req.params.id).then(() => {
        res.json({
            "note": `${req.params.id}deleted`
        })
    }).catch((err) => {
        res.status(500).json(err)
    });
});

//Export routes.
module.exports = router;