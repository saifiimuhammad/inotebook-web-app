import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const Form = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "uncategorized"});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("Success", "See your added note in My Notes");
    }

    const handleOnChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }


    return (
        <form className='my-3' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="noteTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="noteTitle" name='title' aria-describedby="noteTitle" onChange={handleOnChange} minLength={3} required />
            </div>
            <div className="mb-3">
                <label htmlFor="noteTag" className="form-label">Category</label>
                <input type="text" className="form-control" id="noteTag" name='tag' aria-describedby="noteTitle" onChange={handleOnChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="noteDescription" className="form-label">Description</label>
                <textarea className="form-control" id="noteDescription" name='description' rows="5" onChange={handleOnChange} minLength={5} required ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
    )
}

export default Form
