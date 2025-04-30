import React, { useContext } from "react";
import "./style.css";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  const handleDeleteButton = () => {
    deleteNote(note._id);
    showAlert("Success", "Note Deleted successfully!");
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="card-body-2">
          <span className="card-date">{new Date(note.date).toGMTString()}</span>
          <div className="btn-container flex">
            <button
              type="button"
              className="btn note-btn"
              onClick={() => {
                updateNote(note);
              }}
            >
              <i className="ri-edit-box-line note-icon"></i>
            </button>
            <button
              type="button"
              className="btn note-btn"
              onClick={handleDeleteButton}
            >
              <i className="ri-delete-bin-line note-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
