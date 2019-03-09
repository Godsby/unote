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
  .then(res => {
    dispatch({
      type: 'CREATENOTE',
      payload: res.data.note
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
  // console.log('EditNote Called')
  axios.patch(`/notes/${note.note_id}`, note)
  .then(res => {
    console.log(res.data)
    dispatch({
      type: 'EDITNOTE',
      payload: res.data.note
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
  axios.delete(`/notes/${id}`)
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
