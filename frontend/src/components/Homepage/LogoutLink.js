import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutLink = () => {
  return (
    <ul className='right'>
      <li><NavLink className='blue-text' to='/signup'>Sign Up</NavLink></li>
      <li><NavLink className='blue-text' to='/login'>Log In</NavLink></li>
    </ul>
  )
}


export default LogoutLink;