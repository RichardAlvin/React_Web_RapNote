import React from 'react';
import NoteItem from './components/NoteCard/NoteItem';
 
function NoteList({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => note.archived === false);

    return (
        <>
            <h2>Active Note</h2>
            <div className="notes-list">
            {
                activeNotes.length > 0 ? (
                    activeNotes.map((note) => (
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
 
export default NoteList;