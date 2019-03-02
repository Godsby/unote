import React from 'react';

class CreateNote extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {

    return (
      <div className='editor-container'>

        <form>
          <div className='note input-field'>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>

          <div className='note input-field'>
            <label htmlFor='content'>Content:</label>
            <textarea className='materialize-textarea' id='content' onChange={this.handleChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateNote;