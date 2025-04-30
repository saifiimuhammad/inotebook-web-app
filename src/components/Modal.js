import React, { useRef, useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Modal = (props) => {
  const { note, setNote, showAlert, refModal, refLightbox } = props;
  const context = useContext(noteContext);
  const { updateNote } = context;
  const { id, etitle, edescription, etag } = note;
  const refClose = useRef(null);

  const handleSubmit = (e) => {
    refClose.current.click();
    updateNote(id, etitle, edescription, etag);
    showAlert("Success", "Note updated successfully");
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleOnClose = () => {
    refModal.current.classList.remove("hide");
    refLightbox.current.classList.remove("hide");
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div ref={refLightbox} className="lightbox"></div>
      <div
        ref={refModal}
        className="modal flex"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog flex">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h1>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-field">
                  <label htmlFor="noteTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="noteTitle"
                    name="etitle"
                    aria-describedby="noteTitle"
                    onChange={handleOnChange}
                    value={etitle}
                    minLength={3}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="noteTag" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="noteTag"
                    name="etag"
                    aria-describedby="noteTitle"
                    onChange={handleOnChange}
                    value={etag}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="noteDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-input"
                    id="noteDescription"
                    name="edescription"
                    rows="5"
                    onChange={handleOnChange}
                    value={edescription}
                    minLength={5}
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer flex">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleOnClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
