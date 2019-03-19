import React from 'react'

const SearchBar = ({ searchInput, handleChange, tagInput, handleTagChange }) => {

  
  return (
    <div>
      <input 
        placeholder='Search by name'
        className='form'
        type='text'
        value={searchInput}
        onChange={handleChange} 
      />
      <input 
        placeholder='Search by tag'
        className='form'
        type='text'
        value={tagInput}
        onChange={handleTagChange} 
      />
    </div>
  )
  
  
}

export default SearchBar