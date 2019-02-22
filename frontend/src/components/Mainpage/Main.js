import React from 'react';
import Sidebar from './Sidebar';
import Editor from './Editor';
import NoteList from './NoteList';


const Main = () => {
  return (
    <>
      <p>This is Main page</p>
      <Sidebar />
      <NoteList />
      <Editor />
    </>
  )
}
export default Main;