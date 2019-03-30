import React from 'react';
import logo from '../img/Unote-logo.png';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
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
    this.props.signupUser(this.state);
  }

  render () {
    return (
      <div className='login-container card'>

        <a className='logo-container' href='/' >
          <img className='homepage-logo' src={logo} alt='' />
        </a>

        <h5>Remember everything meaningful.</h5>

        <form onSubmit={this.handleSubmit}>
          <div className='login input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='login input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className='login-button'>
            <button className='btn blue lighten-1 z-depth-0'>Signup</button>
          </div>
        </form>

        <div className='switch-explaination'>Already have an account?</div>
        <div><NavLink className='blue-text' to='/users/login'>Log in</NavLink></div>

      </div>
    )
  }
}

export default Signup;