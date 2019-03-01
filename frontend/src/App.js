import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Homepage/Landing';
import AuthContainer from './components/auth/AuthContainer';
import Main from './components/Mainpage/Main';
import CreateNote from './components/Mainpage/CreateNote';

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/users' component={ AuthContainer } />
            <Route exact path='/main' component={ Main } />
            <Route path='/new' component={ CreateNote } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
