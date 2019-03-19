import React from 'react';

const TagList = ({ tags }) => {
  return(
    <div className='taglist'>
      {tags && tags.map((tag, index) => {
        return (
          <span className='tag' key={index}>{tag}</span>
        )
      })}
    </div>
  )
}

export default TagList