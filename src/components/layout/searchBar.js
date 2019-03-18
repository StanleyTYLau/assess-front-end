import React from 'react'

const SearchBar = ({ searchInput, handleChange }) => {

  
  return (
    <div>
      <input 
        placeholder='Search by name'
        className='form'
        type='text'
        id='search'
        value={searchInput}
        onChange={handleChange} />
    </div>
  )
  
  
}

export default SearchBar