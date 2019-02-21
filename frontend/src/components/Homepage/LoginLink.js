import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginLink = () => {
  return (
    <ul className='right'>
      <li><NavLink className='blue-text' to='/'>Log Out</NavLink></li>
    </ul>
  )
}

export default LoginLink;