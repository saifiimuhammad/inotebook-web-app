import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
        {
          "_id": "65bb342fc6155acabe744447",
          "user": "6599898f3670af2af9fa6bb4",
          "title": "iNotebook App",
          "description": "Your notebook on the cloud.",
          "tag": "projects",
          "date": "2024-02-01T06:03:27.268Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>  
    )
}

export default NoteState;