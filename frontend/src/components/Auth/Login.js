import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='login-container card'>

        <h5>Remember everything meaningful.</h5>

        <form onSubmit={this.handleSubmit}>
          <div className='login input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange}/>
          </div>

          <div className='login input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className='login-button'>
            <button className='btn blue lighten-1 z-depth-0'>Login</button>
          </div>
        </form>
        
      </div>
    )
  }
}


export default Login;