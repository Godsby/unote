import axios from 'axios';

export const getAllNotes = id => dispatch => {
  axios.get(`/notes`)
  .then(res => {
    dispatch({
      type: 'GETALLNOTES',
      payload: res.data
    })
  })
}

export const createNote = note => dispatch => {
  console.log('CreateNote Called')
  axios.post(`/notes/new`, note)
  .then(() => {
    dispatch({
      type: 'CREATENOTE',
      payload: note
    })
  })
  .catch(err => {
    dispatch({
      type: 'HANDLENOTE_ERROR',
      payload: err
    })
  })
}

export const selectNote = note => {
  return {
    type: 'SELECTNOTE',
    payload: note
  }
}

export const editNote = note => dispatch => {
  console.log('EditNote Called')
  axios.patch(`/notes/${note.note_id}`, note)
  .then(() => {
    dispatch({
      type: 'EDITNOTE',
      payload: note
    })
  })
  .catch(err => {
    dispatch({
      type: 'HANDLENOTE_ERROR',
      payload: err
    })
  })
}

export const deleteNote = id => dispatch => {
  console.log('DeleteNote Called')
  axios.patch(`/notes/${id}`)
  .then(() => {
    dispatch({
      type: 'DELETENOTE'
    })
  })
  .catch(err => {
    dispatch({
      type: 'HANDLENOTE_ERROR',
      payload: err
    })
  })
}
