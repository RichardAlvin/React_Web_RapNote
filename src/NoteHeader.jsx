import React from 'react';
 
class NoteHeader extends React.Component {
    render() {
        return (
            <div className="note-app__header">
                <h1>RAPNote</h1>
                <div className="note-app__header-left">
                    <a href="https://github.com/RichardAlvin">
                        <img src="/github.png" height="40px"/>
                    </a>
                    <a href="https://www.linkedin.com/in/richard-alvin-pratama/">
                        <img src="/linkedin.png" height="40px"/>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default NoteHeader;