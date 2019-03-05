import React from 'react';
import Sidebar from './Sidebar';
import EditNote from './EditNote';
import NoteList from './NoteList';


const Main = () => {

  return (
    <div className='mainpage-container'>
      <Sidebar />
      <NoteList />
      <EditNote />
    </div>
  )
}

export default Main;