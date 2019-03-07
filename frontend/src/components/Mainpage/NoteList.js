import React from 'react';
import { connect } from 'react-redux';
import { getAllNotes, selectNote, editNote} from '../../store/actions/noteActions';

class NoteList extends React.Component {

  componentDidMount() {
    this.props.getAllNotes();
  }

  handleSelectNote = e => {
    const notes = this.props.notes.notes;
    let selectedNote = notes.find(note => note.note_id === parseInt(e.target.dataset.note_id));
    this.props.selectNote(selectedNote);
  }

  render() {

    const notes = this.props.notes.notes;
    const noteList = notes.length ? (
      notes.map(note => {
        return (
          <div 
            className='post card z-depth-0' 
            key={note.note_id} 
            data-note_id={note.note_id}>
            <div 
              className='list card-content' 
              onClick={this.handleSelectNote}
              data-note_id={note.note_id}>
              <span className='card-title' data-note_id={note.note_id}>{note.title}</span>
              <p data-note_id={note.note_id}>{note.body}</p>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No notes yet!</div>)
  
    return (
      <div className='middle-part'>
        <p className='left'>All Notes</p>
        <div className='noteList-container'>
          
          {noteList} 

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: id => {dispatch(getAllNotes(id))},
    selectNote: note =>{dispatch(selectNote(note))},
    editNote: note => { dispatch(editNote(note))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);