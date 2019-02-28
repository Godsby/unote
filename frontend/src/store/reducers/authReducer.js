const initState = {
  isLoggedIn: false,
  authError: null,
  user: {}
};

const authReducer = (state = initState, action) => {

  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        user: action.user,
        authError: null,
        isLoggedIn: true
      }
    case 'LOGOUT_SUCCESS':
      console.log('Logout Success')
      return {
        ...state,
        user: action.user,
        isLoggedIn: false
      }

    // case SIGN_UP:
    //   newState.user = action.payload;
    //   newState.isLogged = true;
    //   return newState;

    default: 
      return state;
  }
}

export default authReducer;