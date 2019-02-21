import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/Unote-logo.png';
import LoginLink from '../Homepage/LoginLink';
import LogoutLink from '../Homepage/LogoutLink'

const Navbar = () => {
  return (
    <nav className='nav-wrapper white z-depth-0'>
      <a className='homepage-logo-container left' href='/' >
        <img className='homepage-logo' src={logo} alt='' />
      </a>
      <LoginLink />
      <LogoutLink />
    </nav>
  )
}

export default Navbar;