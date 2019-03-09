import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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

        <div className='allNotes-link'>
          <img className='allNotes-log' src='' alt='' />
          <NavLink to='/main'>All Notes</NavLink>
        </div>

        <div className='noteBooks-link'>
          <img className='notebook-log' src='' alt='' />
          <NavLink to='/notebooks'>Notebooks</NavLink>
        </div>

        <div className='allTags-link'>
          <img className='tag-log' src='' alt='' />
          <NavLink to='/tags'>Tags</NavLink>
        </div>

        <div className='trash-link'>
          <img className='trash-log' src='' alt='' />
          <NavLink to='/trash'>Trashs</NavLink>
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