import React from 'react';
import Sidebar from './Sidebar';
import CreateNote from './CreateNote';
import NoteList from './NoteList';
import { getAllNotes } from '../../store/actions/noteActions'


const Main = () => {

  return (
    <div className='mainpage-container'>
      <Sidebar />
      <NoteList />
      <CreateNote />
    </div>
  )
}

export default Main;