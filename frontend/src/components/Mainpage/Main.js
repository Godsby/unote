import React from 'react';
import Sidebar from './Sidebar';
import EditNote from './EditNote';
import NoteList from './NoteList';


const Main = (props) => {
  const path = props.match.path;
  return (
    <div className='mainpage-container'>
      <Sidebar />
      <NoteList />
      <EditNote path={path} />
    </div>
  )
}

export default Main;