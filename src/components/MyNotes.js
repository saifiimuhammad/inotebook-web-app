import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const MyNotes = (props) => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  let navigate = useNavigate();
  const refModal = useRef(null);
  const refLightbox = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    refModal.current.classList.add("hide");
    refLightbox.current.classList.add("hide");
    const { _id, title, description, tag } = currentNote;
    setNote({
      id: _id,
      etitle: title,
      edescription: description,
      etag: tag,
    });
  };

  return (
    <div>
      <Modal
        note={note}
        setNote={setNote}
        showAlert={props.showAlert}
        refModal={refModal}
        refLightbox={refLightbox}
      />
      <h1>My Notes</h1>
      <div className="mynotes-container flex">
        {notes.length === 0 && "You don't have any notes."}
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyNotes;
