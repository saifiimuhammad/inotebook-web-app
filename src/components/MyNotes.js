import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const MyNotes = (props) => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""});
  let navigate = useNavigate();
  
  const refOpen = useRef(null);
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      fetchNotes();
    } else {
      navigate('/');
    }
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
      <Modal note={note} setNote={setNote} showAlert={props.showAlert} />
      <h1>My Notes</h1>
      <div className="row container my-3">
        {(notes.length === 0) && "You don't have any notes."}
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
        })}
      </div>
      
    </div>
  )
}

export default MyNotes
