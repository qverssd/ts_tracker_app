import React, { useContext, useState } from 'react';
import { TrackerContext } from '../context/TrackerContext';


const Notes: React.FC = () => {
  const { notes, setNotes } = useContext(TrackerContext)!;
  const [note, setNote] = useState('');


  const addNote = () => {
    setNotes([...notes, note]);
    setNote('');
  };



  return (
    <div>
      <h2>Notes</h2>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};



export default Notes;