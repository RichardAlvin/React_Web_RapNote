import React from 'react';
import NoteItem from './components/NoteCard/NoteItem';
 
function NoteList({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => note.archived === false);

    return (
        <div className="note-list-div">
            <h2>Active Note</h2>
            <div className="notes-list note-list-active-div">
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
        </div>
    );
}
 
export default NoteList;