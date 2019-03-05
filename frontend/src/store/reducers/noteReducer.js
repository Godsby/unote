const initState = {
  note: [],
  notebook: []
};

const noteReducer = (state = initState, action) => {
  switch(action.type) {
    case 'GETALLNOTES':
    console.log(action.payload.notes)
    return {
      notebook: [...state.notebook],
      note: [...action.payload.notes]
    }
    case 'CREATENOTE':
    return {
      ...state,
      note: [...state.note, action.payload.note]
    }
    case 'EDITNOTE':
    return {
      ...state,
      note: [...state.note, action.payload.note]
    }
    case 'DELETENOTE':
    return {
      ...state,
      note: action.payload.note
    }
    default:
    return state;
  }
}

export default noteReducer;