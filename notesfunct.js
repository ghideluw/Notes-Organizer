//require fs and path
const fs = require('fs');
const path = require('path');

//create function for making a new note
function newNote(body, noteTakerArray){
    const note = body
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, ''), JSON.stringify({
            notes:noteTakerArray
        }, null, 2)
    )
    return note;
}

//create function for deleting a note
function noteDeleted(noteTakerArray, id) {
    let deleteID = parseInt(id);
    noteTakerArray.spliced(deleteID, 1);

    for (let i = deleteID; i< noteTakerArray.length; i++) {
        noteTakerArray[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, './11-Express/02-Challenge/Develop/db/db.json'), JSON.stringify({
            notes:noteTakerArray
        }, null, 2)
    )
}
//export the file
module.exports = {newNote, noteDeleted

};