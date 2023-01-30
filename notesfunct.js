//require fs and path
const fs = require('fs');
const path = require('path');

//create function for making a new note
function addedNote(body, noteTakerArray){
    const note = body
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), JSON.stringify(
        noteTakerArray
        , null, 2)
    )
    return note;
}

//create function for deleting a note
function noteDeleted (noteTakerArray, id) {
    console.log(noteTakerArray); 
    console.log(id);
    let deleteID = id;
    const newArray = [];

    for (let i = 0; i< noteTakerArray.length; i++) {
        if (!(noteTakerArray[i].id === deleteID)){
          newArray.push(noteTakerArray[i])  
        }
    }
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), JSON.stringify(
            newArray
        , null, 2)
    )
}
//export the file
module.exports = {addedNote, noteDeleted

};