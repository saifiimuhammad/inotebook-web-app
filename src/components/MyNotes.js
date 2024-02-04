import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const MyNotes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div>
      <h1>My Notes</h1>
      <div className="row container my-3">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />
        })}
      </div>
    </div>
  )
}

export default MyNotes
