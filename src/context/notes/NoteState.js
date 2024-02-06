import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  //  Fetching all notes
  const fetchNotes = async () => {
    // Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });

    const data = await response.json();
    setNotes(data);
  }

  //  Adding a note
  const addNote = async (title, description, tag) => {
    // Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  //  Deleting a note
  const deleteNote = async (id) => {
    // Api Call
    const response =  await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
      await response.json();

    // Deleting a note
    // console.log(`Deleting the note with id: ${id}`);
    const newNote = notes.filter((note) => { return note._id !== id });
    setNotes(newNote);
  }
  //  Updating a note
  const updateNote = async (id, title, description, tag) => {
    // Api Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
     await response.json();

  let newNotes = JSON.parse(JSON.stringify(notes));
  newNotes.forEach(e => {
    if(e._id === id) {
      e.title = title;
      e.description = description;
      e.tag = tag;
    }
  });
  setNotes(newNotes);
}

const [notes, setNotes] = useState(notesInitial);

return (
  <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, fetchNotes }}>
    {props.children}
  </NoteContext.Provider>
)
}

export default NoteState;