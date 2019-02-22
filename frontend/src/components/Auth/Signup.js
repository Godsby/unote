import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    email: '',
    passcode: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/users', this.state)
    .then(res => { 

      console.log('res', res)
    })
  }

  render () {
    return (
      <div className='login-container card'>
        <h5>Remember everything meaningful.</h5>

        <form onSubmit={this.handleSubmit}>
          <div className='login input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='login input-field'>
            <label htmlFor='passcode'>Password</label>
            <input type='password' id='passcode' onChange={this.handleChange} />
          </div>

          <div className='login-button'>
            <button className='btn blue lighten-1 z-depth-0'>Signup</button>
          </div>
        </form>

      </div>
    )
  }
}

export default Signup;