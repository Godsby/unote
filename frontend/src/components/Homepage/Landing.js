import React from 'react';
import landingPic from '../img/Sample-pic.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='landing-content'>
          <div className='leftside white-text'>
            <h1>Record your thoughtful moments</h1>
            <p>Unote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</p>
            <Link to='/users/signup'>
              <button >SIGN UP FOR FREE</button>
            </Link>
          </div>
          <img className='landing-img' src={landingPic} alt=''/>
      </div>
    </>
  )
}

export default Landing;