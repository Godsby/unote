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
        isLoggedIn: true,
        authError: null,
        user: action.user
      }
    case 'LOGOUT_SUCCESS':
      console.log('Logout Success')
      return {
        ...state,
        isLoggedIn: false,
        user: action.user
      }
    case 'SIGNUP_ERROR':
      console.log('Signup error');
      return {
        ...state,
        authError: 'Signup failed'
      }
    case 'SIGNUP_SUCCESS':
      console.log('Signup success');
      return {
        ...state,
        isLoggedIn: true,
        authError: null,
        user: action.user
      }
    default: 
      return state;
  }
}

export default authReducer;