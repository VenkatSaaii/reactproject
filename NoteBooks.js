import React, { useState } from "react";
import SearchNotes from "./SearchNotes";
import NoteList from "./NoteList";
import NotebookForm from "./NoteBook";



const NoteBooks=()=>{

    const [notes, setnotes]=useState([]);
    const [searchTerm , setSearchterm]=useState('');

    const addttextnote=(note)=>{

        setnotes([...notes, note])

    }

    const deleteNote=(index)=>{
        const updatedNotes=[...notes];
        updatedNotes.splice(index,1)
        setnotes(updatedNotes);
    }

    const filteredNotes=notes.filter((note)=>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return(
        <div>
            <div>
            <h1>NoteBook</h1>
            </div>
            <SearchNotes searchTerm={searchTerm} onSearchChange={setSearchterm} ></SearchNotes>
            <h2> TotalNotes:{notes.length}</h2>
            <h3>Showing :{filteredNotes.length}</h3>
            <NoteList notes={filteredNotes}  onDeleteNote={deleteNote}/>
            <NotebookForm addNote={addttextnote}/>



        </div>

    )
}
export default NoteBooks;