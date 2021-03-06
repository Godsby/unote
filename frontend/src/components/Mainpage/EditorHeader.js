import React from 'react';

const EditorHeader = (props) => {
  return (
    <div className='editor-header'>
      <button
        className='btn pink lighten-1 z-depth-0'
        type='submit'
        value='Delete'
        disabled={!props.note_id}
        onClick={props.handleDelete}
        >Delete</button>
    </div>
  )
}

export default EditorHeader;