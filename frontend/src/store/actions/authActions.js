import axios from "axios";

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

const signupError = user => {
  return { 
    type: 'SIGNUP_ERROR', 
    payload: user 
  };
};

const signupSuccess = user => {
  return {
    type: 'SIGNUP_SUCCESS',
    payload: user
  };
};

export { loginUser, logoutUser, signupError, signupSuccess };