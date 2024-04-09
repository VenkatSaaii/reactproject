import React from "react";

const SearchNotes=(searchTerm , onScreenChange)=>{
    return(
        <div>
            <input 
                type="text"
                placeholder="Search Notes"
                value={searchTerm}
                onChange={(event)=>onScreenChange(event.target.value)}


            />
        </div>

    )

}
export default SearchNotes