// Create new router object
const router = require('express').Router();

//add new route "routesnotes"
const routesnotes = require('../routesnotes')

router.use(routesnotes);


router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './11-Express/02-Challenge/Develop/db/db.json'));
});

// make call to homepage
router.post('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './11-Express/02-Challenge/Develop/db/db.json'));
});
//export router
module.exports = router;