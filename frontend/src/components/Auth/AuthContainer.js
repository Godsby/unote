import React from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { loginUser, signupUser } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class AuthContainer extends React.Component {
  
  render() {
    const auth = this.props.auth;
    if(auth.isLoggedIn) {
      return (
        <Redirect to='/main' />
      )
    } 
    return (
      <>
        <Switch>
          <Route path='/users/login' render={() => <Login loginUser={this.props.loginUser}/>} />
          <Route path='/users/signup' render={() => <Signup signupUser={this.props.signupUser} />} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => {dispatch(loginUser(user))},
    signupUser: user => {dispatch(signupUser(user))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);