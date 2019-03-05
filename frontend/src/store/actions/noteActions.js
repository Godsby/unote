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