// import { selectNote } from "../actions/noteActions";

const initState = {
  notes: [],
  notebook: [],
  selectedNote: {}
};

const noteReducer = (state = initState, action) => {
  switch(action.type) {
    case 'GETALLNOTES':
      // console.log(action.payload.notes)
      return {
        ...state,
        notes: [...action.payload.notes]
      }
    case 'CREATENOTE':
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case 'SELECTNOTE':
      return {
        ...state,
        selectedNote: action.payload
      }
    case 'EDITNOTE':
      const updatedNotes = state.notes.map(note => {
        if (note.note_id === state.selectedNote.note_id) {
          return action.payload;
        } else {
          return note;
        }
      })
      console.log(updatedNotes)
      return {
        ...state,
        selectedNote: action.payload,
        notes: updatedNotes
      }
    case 'DELETENOTE':
      const newNotes = state.notes.filter(note => {
        if (note.note_id !== state.selectedNote.note_id) {
          return true;
        } else {
          return false;
        }
      })
      return {
        ...state,
        notes: newNotes,
        selectedNote: {
          title: '',
          body: ''
        }
      }
    case 'HANDLENOTE_ERROR':
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default noteReducer;