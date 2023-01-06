// const fs = require('fs');
// const path = require('path'); 

const router = require('express').Router();

const store = require('../../db/db.json');

// get request to retrieve the note

router.get('/notes', (req, res) => {
    store.getNotes().then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// set up post request to send the note file to the client

router.post('/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// delete function to remove any notes stored

router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;