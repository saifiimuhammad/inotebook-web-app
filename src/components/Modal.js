import React, { useRef, useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Modal = (props) => {
    const { note, setNote, showAlert } = props;
    const context = useContext(noteContext);
    const { updateNote } = context;
    const { id, etitle, edescription, etag } = note;
    const refClose = useRef(null);

    const handleSubmit = (e) => {
        refClose.current.click();
        updateNote(id, etitle, edescription, etag);
        showAlert("Success", "Note updated successfully");
    }

    
const handleOnChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
}

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="noteTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="noteTitle" name='etitle' aria-describedby="noteTitle" onChange={handleOnChange}  value={etitle} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteTag" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="noteTag" name='etag' aria-describedby="noteTitle" onChange={handleOnChange}  value={etag}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteDescription" className="form-label">Description</label>
                                    <textarea className="form-control" id="noteDescription" name='edescription' rows="5" onChange={handleOnChange} value={edescription} minLength={5} required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
