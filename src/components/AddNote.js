import React from 'react';
import Form from './Form';

const AddNote = (props) => {
  return (
    <div className="my-3">
        <h2>Add note</h2>
        <Form showAlert={props.showAlert}/>
      </div>
  )
}

export default AddNote
