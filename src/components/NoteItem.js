import React from 'react';
import './style.css';

const NoteItem = (props) => {
    const { note } = props;

    return (
        <div className="col-md-3">
            <div class="card card-container my-3" style={{ "width": "18rem", "minHeight": "300px" }}>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p class="card-text my-3">{note.description}</p>
                </div>
                <span className='text-primary my-3 container'>{new Date(note.date).toGMTString()}</span>
                <div className="container my-3">
                    <button type="button" class="btn btn-outline-success me-2">
                        <i class="ri-edit-box-line"></i>
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                        <i class="ri-delete-bin-line"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
