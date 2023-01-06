const path = require('path');

const router = require('express').Router();

//router sends the new note to the notes.html file to be saved
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

//
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;