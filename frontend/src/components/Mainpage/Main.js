import React from 'react';
import Sidebar from './Sidebar';
import EditNote from './EditNote';
import NoteList from './NoteList';


class Main extends React.Component {

  newNoteClick = e => {
    
  }

  render() {
    const path = this.props.match.path;
    return (
      <div className='mainpage-container'>
        <Sidebar newNoteClick={this.newNoteClick}/>
        <NoteList />
        <EditNote path={path} />
      </div>
    )
  }
}

export default Main;