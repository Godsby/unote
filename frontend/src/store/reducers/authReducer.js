import { LOG_IN, LOG_OUT, SIGN_UP } from "../actions/actionTypes";

const initState = {
  isLogged: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOG_IN:
    case SIGN_UP:
      newState.user = action.payload;
      newState.isLogged = true;
      return newState;
    case LOG_OUT:
      newState.user = {};
      newState.isLogged = false;
      return newState;
    default: 
      return newState;
  }
}

export default authReducer;