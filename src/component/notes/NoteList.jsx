import React, { useState } from 'react'
import FormNotes from './FormNotes';
import { RiCloseFill } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

const NoteList = ({ notes, updateNote, removeNote, completeNote }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateNote(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
      return <FormNotes edit={edit} onSubmit={submitUpdate} />;
    }

    return notes.map((note, index) => (
        <div
          className={note.isComplete ? 'note complete' : 'note'}
          key={index}
        >
          <div key={note.id} onClick={() => completeNote(note.id)} className='note-row'>
           <p>{note.text}</p>   
          </div>
          <div className='icons'>
            <AiOutlineEdit
              onClick={() => setEdit({ id: note.id, value: note.text })}
              className='edit-icon'
            />
            <RiCloseFill
              onClick={() => removeNote(note.id)}
              className='delete-icon'
            />
            
          </div>
        </div>
      ));
}

export default NoteList
