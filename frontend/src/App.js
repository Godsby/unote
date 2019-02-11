import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    axios.get('users')
    // axios.post('users', {email: 'le@hotmail.com', passcode: 'testcode'})
    .then(res => {
      debugger
    })
  }

  render() {
    return (
      <div className="App">
        'Hello'
      </div>
    );
  }
}

export default App;
