import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const MyNotes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <h1>My Notes</h1>
      <div className="container my-3">
        {notes.map((note) => {
          return note.title
        })}
      </div>
    </div>
  )
}

export default MyNotes
