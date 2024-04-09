import React from "react";
import NoteBook from "./NoteBook";

const NoteList=({notes ,onDeleteNote})=>{
    return(
        <div>
            {notes.map((note,index) => (
                <div key={index}>

                <NoteBook key={index} title={note.title} description={note.description}></NoteBook>
                <button onClick={()=>onDeleteNote(index)}>Delete</button>
                </div>
            ))}
        </div>

    )

}
export default NoteList;