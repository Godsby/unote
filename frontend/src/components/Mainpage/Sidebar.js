import React from 'react';
import '../../css/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import allNoteSVG from '../svg/allNotes';

const Sidebar = (props) => {

  return (
    <div className="sidebar-container">

      <div className="userProfile-container">
        {/* show userAvatar and email */}
        <div className='userAvatar'>
          <span>This is userlogo</span>
          <div>{props.auth.isLoggedIn}</div>
        </div>
        {/* listening onClick above to show a dropdown tab */}
        <div className='userProfile'>
          <ul>
            <li className='userDropdown' id="email">
              <div>Email</div>
            </li>
            <li className='userDropdown' id="setting">
              <div>Setting</div>
            </li>
            <li className='userDropdown' id="help">
              <div>Help</div>
            </li>
            <li className='userDropdown' id="signout">
              <div>Sign out</div>
            </li>
          </ul>
        </div>

      </div>

      <div className="search-container center">
        <form>
          <input type="text" placeholder="Search all notes..." name="search"/>
        </form>
      </div>

      <nav className='nav-wrapper z-depth-0'>
        <div className='newNote-link' onClick={props.newNoteClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
            <g fill="none" fill-rule="evenodd"><path d="M0 0h30v30H0z"></path><circle cx="15" cy="15" r="14" fill="#00A82D"></circle><rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect><rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect></g>
          </svg>
          <span id='newNoteLink'>New Note</span>
        </div>

        <div className='sidebar-link'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24">
            <defs>
              <path id="132a" d="M16 16h2v-1h-2a.997.997 0 0 0-1 1v3h1v-3zM8 4h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 4a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3z">
              </path>
            </defs>
            <use fill="#000" href="#132a" fill-rule="evenodd"></use>
          </svg>
          <span id='sidebarOpt'>All Notes</span>
        </div>

        <div className='sidebar-link'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M9 4h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9V4zM6 4h2v15H6V4zm5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4z">
            </path>
          </svg>
          <span id='sidebarOpt'>Notebooks</span>
        </div>

        <div className='sidebar-link'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24">
            <defs>
              <path id="128a" d="M10.265 9.005a2 2 0 1 0 3.47 0H18v9.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9.5h4.265zM9.5 16a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0-2a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm4.235-4.995H18l-4.982-4.606a1.5 1.5 0 0 0-2.036 0L6 9.005h4.265a2 2 0 0 1 3.47 0z">
              </path>
            </defs>
            <use fill="#131313" fill-rule="nonzero" href="#128a">
            </use>
          </svg>
          <span id='sidebarOpt'>Tags</span>
        </div>

        <div className='sidebar-link'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24" >
            <defs>
              <path id="70a" d="M5 7.496a.5.5 0 0 1 .5-.5L8.996 7V5.25c0-.69.305-1.25 1.008-1.25H14c.703 0 1 .556 1 1.247v1.75H18.5a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5zm5.25-2.001a.25.25 0 0 0-.25.25v1.002c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5.745a.25.25 0 0 0-.25-.25h-3.5zm6.205 12.567c0 .69-.57.935-1.273.935H8.818c-.703 0-1.273-.56-1.273-1.25l-.548-8.748H17l-.546 9.063z">
              </path>
            </defs>
            <use fill="#000" fill-rule="nonzero"  href="#70a">
            </use>
          </svg>
          <span id='sidebarOpt'>Trashs</span>
        </div>

      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Sidebar);