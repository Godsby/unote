import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Homepage/Landing';
import Auth from './components/Auth/Auth';
import Main from './components/Mainpage/Main';


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
   this.fetchData('users');
   this.fetchData('notes');
   this.fetchData('noteBooks');
   this.fetchData('noteTags');
  }

  fetchData = async (route) => {
    let res = await axios.get(`${route}`);
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
            <Route exact path = '/' component= {Landing} />
            <Route path = '/auth' component= {Auth} />
            <Route exact path = '/main' component= {Main} />
          </div>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
