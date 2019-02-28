import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Homepage/Landing';
import AuthContainer from './components/auth/AuthContainer';
import Main from './components/Mainpage/Main';
import CreateNote from './components/Mainpage/CreateNote';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      notes: [],
      noteBooks: [],
      noteTags: []
    }
  }

  componentDidMount () {
   this.fetchData('/users');
   this.fetchData('/notes');
   this.fetchData('/noteBooks');
   this.fetchData('/noteTags');
  }

  fetchData = async (route) => {
    let res = await axios.get(`${route}`);
    console.log(res)
    this.setState({
      [route]: Object.values(res.data)[1]
    })
  }

  render() {
    // debugger
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route exact path='/' component={ Landing } />
            <Route path='/' component={ AuthContainer } />
            <Route exact path='/main' component={ Main } />
            <Route path='/new' component={ CreateNote } />
          </div>

        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = () => {
  
}

export default connect()(App);
