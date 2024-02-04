import React, { useContext } from 'react';
import './style.css';
import noteContext from '../context/notes/noteContext';


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;

    return (
        <div className="col-md-3">
            <div className="card card-container my-3" style={{ "maxWidth": "18rem", "minHeight": "300px" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p className="card-text my-3">{note.description}</p>
                </div>
                <span className='text-primary my-3 container'>{new Date(note.date).toGMTString()}</span>
                <div className="container my-3">
                    <button type="button" className="btn btn-outline-success me-2">
                        <i className="ri-edit-box-line"></i>
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteNote(note._id)}}>
                        <i className="ri-delete-bin-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
