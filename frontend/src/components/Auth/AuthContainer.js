import React from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { loginUser, logoutUser, signupUser } from '../../store/actions/authActions';

class AuthContainer extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/signup' component={Signup} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => {dispatch(loginUser(user))},
    logout: () => {dispatch(logoutUser())},
    signup: user => {dispatch(signupUser(user))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);