import React from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { loginUser, signupUser } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class AuthContainer extends React.Component {
  
  render() {

    const { isLoggedIn } = this.props.auth;
    if( isLoggedIn ) {
      return (
        <Redirect to='/main' />
      )
    } 
    return (
      <div className='container right'>
        <Switch>
          <Route path='/users/login' render={() => <Login loginUser={this.props.loginUser}/>} />
          <Route path='/users/signup' render={() => <Signup signupUser={this.props.signupUser} />} />
        </Switch>
      </div>
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