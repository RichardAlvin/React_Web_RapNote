import React from 'react';
 
class NoteHeader extends React.Component {
    render() {
        return (
            <div className="note-app__header">
                <h1>RAPNote</h1>
                <input type="text" />
            </div>
        );
    }
}
 
export default NoteHeader;