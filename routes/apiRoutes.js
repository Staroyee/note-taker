const router = require('express').Router();
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.post('/notes', (req, res) => {
    store.writeNote(req.body).then((newNote) => {
        res.json(newNote);
    }).catch((err) => {
        res.status(500).json(err)
    });
});

module.exports = router;