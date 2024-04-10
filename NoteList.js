import React from 'react';

function NoteList({ notes, onDeleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <div>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
          <button onClick={() => onDeleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;