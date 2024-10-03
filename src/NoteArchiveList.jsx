import React from 'react';
import NoteItem from './components/NoteCard/NoteItem';
 
class NoteArchiveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchNote: ''
        };
    }

    handleSearchNote = (e) => {
        this.setState({ searchNote: e.target.value });
    }

    render() {
        const { notes, onDelete, onArchive } = this.props;

        const archivedNotes = notes.filter((note) => note.archived === true)
        .filter((note) => 
            note.title.toLowerCase().includes(this.state.searchNote.toLowerCase())
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return (
            <div className="note-list-div">
                <div className="note-list-div-header">
                    <h3>Archive Note</h3>
                    <input type="text" placeholder='Search...' value={this.state.searchNote} onChange={this.handleSearchNote}/>
                </div>
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
        )
    };
}
 
export default NoteArchiveList;