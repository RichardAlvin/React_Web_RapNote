import React from 'react';
 
function NoteCardBody({ body }) {
 return (
   <div className="note-item__body">
        <p>{body}</p>
   </div>
 );
}
 
export default NoteCardBody;