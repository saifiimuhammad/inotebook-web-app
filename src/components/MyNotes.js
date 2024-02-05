import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Modal from './Modal';

const MyNotes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""});
  
  const refOpen = useRef(null);
  
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    refOpen.current.click();
    const { _id, title, description, tag } = currentNote;
    setNote({
      id: _id,
      etitle: title,
      edescription: description,
      etag: tag
    });
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button ref={refOpen} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
      <Modal note={note} setNote={setNote} />
      <h1>My Notes</h1>
      <div className="row container my-3">
        {(notes.length === 0) && "You don't have any notes."}
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} updateNote={updateNote} />
        })}
      </div>
      
    </div>
  )
}

export default MyNotes
