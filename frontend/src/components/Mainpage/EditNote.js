import React from 'react';
// import Quill from 'quill';
import { connect } from 'react-redux';
import { createNote, editNote, deleteNote } from '../../store/actions/noteActions';
import EditorHeader from './EditorHeader';
import EditorFooter from './EditorFooter';

class EditNote extends React.Component {
  state = {
    title: '',
    body: '',
    note_id: null
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const { selectedNote } = this.props;
    if (!Object.keys(selectedNote).length) {
      this.props.createNote(this.state);
      this.setState({
        title: '',
        body: ''
      })
    } else {
      this.props.editNote(this.state);
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.selectedNote !== this.props.selectedNote) {
      this.setState({
        title: this.props.selectedNote.title,
        body: this.props.selectedNote.body,
        note_id: this.props.selectedNote.note_id
      })
    }
  }

  render() {
    return (
      <div className='editor-container'>
        <EditorHeader title={this.state.title}/>
        <div className='editor'>
          <form onSubmit={this.handleSubmit}>
            <div className='note-input'>
              <input
                className='title-input'
                type='text' 
                id='title' 
                value={this.state.title}
                onChange={this.handleChange}
                placeholder='Title' />

              <textarea 
                className='materialize-textarea' 
                id='body' 
                onChange={this.handleChange}
                value={this.state.body}
                placeholder='Start writing, drag files or choose a ' />
            </div>

            <input 
              className='btn blue lighten-1 z-depth-0' 
              type='submit' 
              value='Save'
              disabled={!this.state.title}/>
          </form>
        </div>
        <EditorFooter />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    selectedNote: state.notes.selectedNote,
    path: ownProps.path
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => { dispatch(createNote(note))},
    editNote: note => { dispatch(editNote(note))},
    deleteNote: id => { dispatch(deleteNote(id))},
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);