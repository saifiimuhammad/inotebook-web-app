import React from "react";
import Form from "./Form";

const AddNote = (props) => {
  return (
    <div className="addnote-container">
      <h2 className="title">Add note</h2>
      <Form showAlert={props.showAlert} />
    </div>
  );
};

export default AddNote;
