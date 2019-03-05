import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllNotes } from '../../store/actions/noteActions';

class NoteList extends React.Component {

  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {

    const notes = this.props.notes.notes;
    // console.log(props)
    const noteList = notes.length ? (
      notes.map(note => {
        return (
          <div className='post card z-depth-0' key={note.note_id}>
            <div className='card-content'>
              <Link to={'/' + note.id}>
                <span className='card-title'>{note.title}</span>
              </Link>
              <p>{note.body}</p>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No notes yet!</div>)
  
    return (
      <div className='noteList-container'>
        {/* <button onClick={props.getAllNotes}>Get Notes</button> */}
        <p className='left'>All Notes</p>
        {noteList}
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
    getAllNotes: id => {dispatch(getAllNotes(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);