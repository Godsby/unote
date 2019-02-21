import React from 'react';
import landingPic from '../Sample-pic.png';
import Navbar from './Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='landing-content row'>
          <div className='col s2 m2 white-text'>
            <h1>Record your thoughtful moments</h1>
            <p>Unote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</p>
            <button>SIGN UP FOR FREE</button>
          </div>

          <div className='col s2 m1 offset-m1'>
            <img className='landing-img' src={landingPic} alt=''/>
          </div>
      </div>
    </>
  )
}

export default Landing;