import React from 'react';
import NoteItem from './components/NoteCard/NoteItem';
 
function NoteArchiveList({ notes, onDelete, onArchive }) {
    const archivedNotes = notes.filter((note) => note.archived === true);

    return (
        <div className="note-list-div">
            <h2>Archive Note</h2>
            <div className="notes-list-archive note-list-archive-div">
            {
                archivedNotes.length > 0 ? (
                    archivedNotes.map((note) => (
                        <NoteItem 
                        key={note.id}
                        onDelete={onDelete} 
                        onArchive={onArchive}
                        {...note} />
                    ))
                ) : (
                    <p>Empty Notes</p>
                )
            }
            </div>
        </div>
    );
}
 
export default NoteArchiveList;