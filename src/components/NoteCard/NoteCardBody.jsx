import React from 'react';
 
function NoteCardBody({ body }) {
 return (
   <div className="note-item__body">
        <p>{body.length > 150 ? body.substring(0, 100) + "..." : body}</p>
   </div>
 );
}
 
export default NoteCardBody;