/* This part is to push new entries into the app. */
const notes = [];
function saveNote(content, id) {
    notes.push ({"content": content, "id": id},)
    return notes;
  }
  
  saveNote("Pick up groceries", 1);
  saveNote("Do laundry", 2);
  saveNote("'Bilka to Go' at 5 in evening", 3);  
  console.log(notes); 


  /* This part is for searching the entries with ID number, and won't allow user to use any string for search. */

function getNote(id) {
  if (typeof id !== "number" || typeof id === null || id > notes.length) {
     alert( "Please enter valid ID number.")
  } else {
    for (let i = 0; i < notes.length; i++) {
      {
        if (id == notes[i].id) {
          return notes[i];
        }
      }
    }
  }
}
  const firstNote = getNote(1);
  const secondNote = getNote(2);
  const thirdNote = getNote(3);
  console.log(firstNote);
  console.log(secondNote);
  console.log(thirdNote);


  /* This part is see notes in purticular formate.  */

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
      noteInFormat = console.log("The note with id: " + notes[i].id + " has the following note text: " + notes[i].content);
    }
  return noteInFormat;
}
logOutNotesFormatted(); 