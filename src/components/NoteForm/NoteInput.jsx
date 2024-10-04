import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            body: '',
            titleLimit: 50
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
      
    onTitleChangeEventHandler(event) {
        let titleLimit = 0;
        if(event.target.value.length > 50) return;

        if(this.state.title.length < event.target.value.length){
            titleLimit += 1
        }else{
            titleLimit -= 1;
        }
        this.setState(() => {
            return {
                title: event.target.value,
                titleLimit: this.state.titleLimit - titleLimit
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
                <h3>Add Note</h3>
                <p className='note-input-info'>Sisa Karakter: {this.state.titleLimit}</p>
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