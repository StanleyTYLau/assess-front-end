import React, { Component } from 'react';

class TagForm extends Component {
  state = {
    tagInput: '',
  }

  handleTagChange = (e) => {
    this.setState({
      tagInput: e.target.value
    })
  }

  handleTagAdd = (e) => {
    if (e.key === 'Enter') {
      this.props.addTag(this.state.tagInput, this.props.studentId)
      
      this.setState({
        tagInput: ''
      })
    }
  }

  render() {
    return (
      <div className='grades'>
        <input 
          placeholder='Add a tag'
          className='tagForm'
          type='text'
          // id={this.props.studentId}
          value={this.state.tagInput}
          onKeyPress={this.handleTagAdd} 
          onChange={this.handleTagChange}
        />
      </div>
    )
  }
}

export default TagForm