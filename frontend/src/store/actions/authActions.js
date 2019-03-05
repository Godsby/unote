import axios from "axios";

//Login actions
const loginUser = user => dispatch => {
  axios.post('/users/login', user)
  .then(res => {
    dispatch(receiveUserSuccess({ 
      user: res.data, 
      message: 'Login success'
    }))
  })
  .catch(err => {
    dispatch(receiveUserError(err))
  })
}

const receiveUserError = payload => {
  return { 
    type: 'RECEIVEUSER_ERROR',
    payload
  };
};

const receiveUserSuccess = payload => {
  return {
    type: 'RECEIVEUSER_SUCCESS',
    payload
  };
};

//Check if there is user login
const checkisLoggedIn = user => dispatch => {
  axios.get('/users/isLoggedIn')
  .then(res => {
    // console.log(res)
    if (res.data.err) {
      dispatch(receiveUserError(res.data.err))
    } else {
      dispatch(receiveUserSuccess(res.data))
    }
  })
  .catch(err => dispatch(receiveUserError(err)))
}

//Logout actions
const logoutUser = () => dispatch => {
  axios.post('/users/logout')
  .then(res => dispatch(logoutSuccess()))
  .catch(err => console.log(err))
}

const logoutSuccess = () => {
  return { 
    type: 'LOGOUT_SUCCESS'
  };
};

//Signup action, successful signup automaticly call loginUser funcation
const signupUser = user => dispatch => {
  console.log('signup user called')
  axios.post('/users/new', user)
  .then(res => dispatch(loginUser(user)))
  .catch(err => dispatch(receiveUserError(err)))
}


export { loginUser, checkisLoggedIn, logoutUser, signupUser };