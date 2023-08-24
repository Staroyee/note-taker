//Assign 'router' variable the express class 'router'.
const router = require('express').Router();

//Import 'path' node module.
const path = require('path');

//Create route to return a response containing notes.html file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

//Create route to return a response containing index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//Export routes.
module.exports = router;