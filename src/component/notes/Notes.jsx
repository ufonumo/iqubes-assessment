import React, {useState} from 'react'
import FormNotes from './FormNotes';
import NoteList from './NoteList';

const Notes = () => {
    
    const [notes, setNotes] = useState([]);

    const addNotes = note => {
      if (!note.text || /^\s*$/.test(note.text)) {
        return;
      }
  
      const newNotes = [note, ...notes];
  
      setNotes(newNotes);
      console.log(...notes);
    };
  
    const updateNote = (noteId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)));
    };

    const removeNote = id => {
        const removedArr = [...notes].filter(note => note.id !== id);
    
        setNotes(removedArr);
      };
    
      const completeNote = id => {
        let updatedNotes = notes.map(note => {
          if (note.id === id) {
            note.isComplete = !note.isComplete;
          }
          return note;
        });
        setNotes(updatedNotes);
      };

    return (
        <>
            <div className="notes">
                <small>Notes</small>
                <FormNotes onSubmit={addNotes} />                
                {/* <div className="note__textarea">
                    <button className='close'>X</button>
                    <div className="textarea">
                        <input onChange={handleNote} value={notes}  type="text" name="" id="" />
                    </div>
                </div> */}
                <NoteList 
                    notes={notes}
                    updateNote={updateNote}
                    removeNote={removeNote}
                    completeNote={completeNote}
                />
                
            </div>
        </>
    )
}

export default Notes
