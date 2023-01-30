
const router = require('express').Router();
const notesDb = require('../../db/db.json');
router.get('/notes', (req, res) => {
   console.log('I hit this route');
   res.json(notesDb);
});

// make call to homepage
router.post('/notes', (req, res) => {
   
});
//export router
module.exports = router;