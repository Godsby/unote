import React from 'react';
// import Quill from 'quill';
import { connect } from 'react-redux';
import { createNote, editNote, deleteNote } from '../../store/actions/noteActions';

class EditNote extends React.Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.createNote(this.state);
    // this.props.editNote(this.state);
    // this.props.deleteNote(this.state);
  }

  render() {

    return (
      <div className='editor-container'>

        <form onSubmit={this.handleSubmit}>
          <div className='note-input'>
            <input
              className='title-input'
              type='text' 
              id='title' 
              onChange={this.handleChange}
              placeholder='Title' />

            <textarea 
              className='materialize-textarea' 
              id='body' 
              onChange={this.handleChange}
              placeholder='Start writing, drag files or choose a ' />
          </div>

          <input 
            className='btn blue lighten-1 z-depth-0' 
            type='submit' 
            value='submit'/>

        </form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    note: state.note
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => { dispatch(createNote(note))},
    editNote: (id, note) => { dispatch(editNote(id, note))},
    deleteNote: id => { dispatch(deleteNote(id))},
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);