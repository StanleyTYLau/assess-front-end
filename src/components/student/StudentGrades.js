import React from 'react'

const StudentGrades = ({ grades }) => {
  
  return (
    <div className='grades'>
      {grades && grades.map((grade, index) => {
        return (
          <div className='details'>Test {index + 1}: <span>&nbsp;&nbsp;&nbsp;</span> {grade}%</div>
        )
      })}
    </div>
  )
}

export default StudentGrades