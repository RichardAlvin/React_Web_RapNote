import React from 'react';
import NoteCardHeader from './NoteCardHeader';
import NoteCardBody from './NoteCardBody';
import NoteCardFooter from './NoteCardFooter';
 
function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="note-item note-item__content">
        <div>
          <NoteCardHeader title={title} createdAt={createdAt} />
          <NoteCardBody body={body} />
        </div>
        <NoteCardFooter id={id} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  );
}
 
export default NoteItem;