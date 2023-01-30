// const fs = require('fs');
// const path = require('path'); 
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const notes = require('../../db/db.json');

const {addedNote, noteDeleted } = require('../../notesfunct');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);

})

  router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    let note = addedNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
     noteDeleted (notes, req.params.id);
    res.json(notes);
})

module.exports = router;