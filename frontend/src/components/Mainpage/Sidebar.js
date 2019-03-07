import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">

      <form className="userProfile">
        <select>
          <option value="email">Email</option>
          <option value="setting">Setting</option>
          <option value="help">Help</option>
          <option value="signout">Sgin out</option>
        </select>
      </form>

      <div className="search-container center">
        <form>
          <input type="text" placeholder="Search all notes..." name="search"/>
        </form>
      </div>

      <nav className='nav-wrapper z-depth-0'>
        <div className='newNote-link' onClick={props.newNoteClick}>
          <img className='newNote-logo' src='' alt='' />
          <NavLink to='/main'>New Note</NavLink>
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



export default Sidebar;