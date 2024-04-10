import React, { useState } from 'react';

function NoteBookForm({ onAddNote }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title.trim() === '' || description.trim() === '') {
        alert('Please enter both title and description.');
        return;
      }
  
    onAddNote({
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter note title"
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter note description"
          rows={6}
          cols={30}
        />
      </div>
      <button onClick={handleAddNote}>Add to Notebook</button>
    </div>
  );
}

export default NoteBookForm