import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            body: '',
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
      
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }
      
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
      
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
 
    render() {
        return (
            <div className='note-input'>
                <h2>Add Note</h2>
                <form className='note-form' onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <input type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}
 
export default NoteInput;