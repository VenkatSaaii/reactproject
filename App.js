import React, { useState } from 'react';
import './App.css';
import NoteBookForm from './components/NoteBookForm';
import NoteList from './components/NoteList';
import SearchNotes from './SearchNotes';

function App() {
  const [noteList, setNotesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNote = note => {
    setNotesList([...noteList, note]);
  };

  const handleDeleteNote = index => {
    setNotesList(noteList.filter((_, i) => i !== index));
  };

  const filteredNotes = noteList.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='center'>
      <h1>Notebook</h1>
      
      <p>Total Notes: {noteList.length}</p>
      <p>
        Showing : {searchTerm ? filteredNotes.length : noteList.length}
      </p>
      </div>

      <SearchNotes searchTerm={searchTerm} onSearch={setSearchTerm} />

      <NoteBookForm onAddNote={handleAddNote} />
     
      <NoteList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
     
    </div>
  );
}

export default App;