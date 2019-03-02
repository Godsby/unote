import React from 'react';
import logo from '../../components/Unote-logo.png';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser()
  }

  render() {
    const { isLoggedIn } = this.props.auth;

    return (
      <nav className='nav-wrapper white z-depth-0'>
        <a className='homepage-logo-container left' href='/' >
          <img className='homepage-logo' src={logo} alt='' />
        </a>
  
        <ul className='right'>
          { isLoggedIn
            ? <li><NavLink onClick={this.handleLogout} className='blue-text' to='/'>Log Out</NavLink></li> 
            : <>
                <li><NavLink className='blue-text' to='/users/signup'>Sign Up</NavLink></li>
                <li><NavLink className='blue-text' to='/users/login'>Log In</NavLink></li> 
              </>
          }
        </ul>
      </nav>
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
    logoutUser: () => { dispatch(logoutUser()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);