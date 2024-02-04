import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65bb342fc6155aca33be744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        }
      ]

      //  Adding a note
      const addNote = (title, description, tag) => {
        console.log("Adding a new note");
        const note = {
          "_id": "65bb342fc6155aca33be744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        }

        setNotes(notes.concat(note));
      }

      //  Deleting a note
      const deleteNote = (id) => {

      }
      //  Updating a note
      const updateNote = (id) => {

      }

      const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>  
    )
}

export default NoteState;