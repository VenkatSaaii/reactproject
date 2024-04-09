import React, { useState } from "react";

const NotebookForm =(addNote)=>{

    const [title , setTitle]= useState('');
    const [description, setDiscription]= useState('');



    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!title || !description) return;
        addNote({title, description})
        setTitle('');
        setDiscription('');


    }
    return (
        <form onSubmit={handleFormSubmit} >
            <input type="text" placeholder="Title" value={title}
            onChange={(event)=>setTitle(event.target.value)}
            />

            <textarea
            placeholder="Description"
            value={description}
            onChange={(event)=>setDiscription(event.target.value)}

            />

            <button type="submit">Add To Book</button>
            

        </form>

    )

}
export default NotebookForm;