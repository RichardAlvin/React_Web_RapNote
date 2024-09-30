import React from 'react';
import NoteItem from './components/NoteCard/NoteItem';
 
function NoteArchiveList({ notes, onDelete, onArchive }) {
    const archivedNotes = notes.filter((note) => note.archived === true);

    return (
        <>
            <h2>Archive Note</h2>
            <div className="notes-list">
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
        </>
    );
}
 
export default NoteArchiveList;