import axios from "axios";

//Login actions
const loginUser = user => dispatch => {
  axios.post('/users/login', user)
  .then(res => {
    dispatch(loginSuccess(res.data))
  })
  .catch(err => {
    dispatch(loginError(err))
  })
}

const loginError = () => {
  return { 
    type: 'LOGIN_ERROR'
  };
};

const loginSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
};

//Logout actions
const logoutUser = user => dispatch => {
  axios.post('/users/logout', user)
  .then(res => dispatch(logoutSuccess(res.data)))
  .catch(err => console.log(err))
}

const logoutSuccess = () => {
  return { 
    type: 'LOGOUT_SUCCESS', 
    user: {}   
  };
};

//Signup action, successful signup automaticly call loginUser funcation
const signupUser = user => dispatch => {
  console.log('signup user called')
  axios.post('/users/new', user)
  .then(res => dispatch(loginUser(user)))
  .catch(err => dispatch(signupError(err)))
}

const signupError = () => {
  return { 
    type: 'SIGNUP_ERROR' 
  };
};


export { loginUser, logoutUser, signupUser };