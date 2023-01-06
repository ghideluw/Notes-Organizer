//
const router = require('express').Router();


//create a new note
const {
    notes
} = require('../db/db.json');
//delete a new note
const {
    newNote,
    noteDeleted
} = require('../db/lib/notesfunct');
//save note history
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);

})
//client side to add new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
})
//client side deletes note
router.delete('/notes/:id', (req, res) => {

    noteDeleted(notes, req.params.id);
    res.json(notes);
})
// export router file
module.exports = router;