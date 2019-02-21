import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutLink = () => {
  return (
    <ul className='right'>
      <li><NavLink className='blue-text' to='/'>Sign Up</NavLink></li>
      <li><NavLink className='blue-text' to='/'>Log In</NavLink></li>
    </ul>
  )
}


export default LogoutLink;