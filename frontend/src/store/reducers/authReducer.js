const initState = {
  isLoggedIn: false,
  message: "",
  user: {}
};

const authReducer = (state = initState, action) => {

  switch (action.type) {
    case 'RECEIVEUSER_ERROR':
      console.log('Login error', action);
      return {
        ...state,
        message: action.payload.message
      }
    case 'RECEIVEUSER_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        message: action.payload.message
      }
    case 'LOGOUT_SUCCESS':
      console.log('Logout Success')
      return {
        ...state,
        isLoggedIn: false
      }
    default: 
      return state;
  }
}

export default authReducer;