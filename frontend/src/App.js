import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Homepage/Landing';
import AuthContainer from './components/auth/AuthContainer';
import Main from './components/Mainpage/Main';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import { checkisLoggedIn } from './store/actions/authActions';

class App extends Component {



  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/users' component={ AuthContainer } />
            <PrivateRoute exact path='/main' component={ Main } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkisLoggedIn: () => {dispatch(checkisLoggedIn())}
  }
}

export default connect(null, mapDispatchToProps)(App);
