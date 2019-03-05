const initState = {
  notes: [],
  notebook: []
};

const noteReducer = (state = initState, action) => {
  switch(action.type) {
    case 'GETALLNOTES':
    console.log(action.payload.notes)
    return {
      notebook: [...state.notebook],
      notes: [...action.payload.notes]
    }
    case 'CREATENOTE':
    return {
      ...state,
      notes: [...state.notes, action.payload]
    }
    case 'EDITNOTE':
    return {
      ...state,
      notes: [...state.notes, action.payload]
    }
    case 'DELETENOTE':
    return {
      ...state,
      notes: action.payload
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