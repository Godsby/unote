import React from 'react';
import landingPic from '../Sample-pic.png';
import Navbar from './Navbar';
// import AuthContainer from '../auth/AuthContainer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='landing-content'>
          <div className='leftside white-text'>
            <h1>Record your thoughtful moments</h1>
            <p>Unote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</p>
            <button>SIGN UP FOR FREE</button>
          </div>
          <img className='landing-img' src={landingPic} alt=''/>
      </div>
    </>
  )
}

export default Landing;