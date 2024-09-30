import React from 'react';
import NoteHeader from './NoteHeader';
import NoteList from './NoteList';
import NoteArchiveList from './NoteArchiveList';
import NoteInput from './components/NoteForm/NoteInput';
import { getInitialData } from './utils/index';
 
class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onPindahkanNoteHandler = this.onPindahkanNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        const index = this.state.notes.findIndex(note => note.id === id);
        if(index === -1) return;

        const updatedNotes = [...this.state.notes];
        updatedNotes[index] = {...updatedNotes[index], archived: true};

        this.setState({ notes: updatedNotes });
    }

    onPindahkanNoteHandler(id) {
        const index = this.state.notes.findIndex(note => note.id === id);
        if(index === -1) return;

        const updatedNotes = [...this.state.notes];
        updatedNotes[index] = {...updatedNotes[index], archived: false};

        this.setState({ notes: updatedNotes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
        return {
            notes: [
            ...prevState.notes,
            {
                id: +new Date(),
                title,
                body,
                archived: false,
                createdAt: new Date()
            }
            ]
        }
        });
    }
 
    render() {
        return (
        <div className="note-app">
                <NoteHeader />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler}/>
                    <NoteArchiveList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onPindahkanNoteHandler}/>
                </div>
        </div>
        );
    }
}
 
export default NoteApp;