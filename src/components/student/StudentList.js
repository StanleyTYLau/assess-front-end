import React from 'react';
import StudentSummary from './StudentSummary';

const StudentList = (props) => {
  console.log('studentlist props:', props)
  return (
    <div>
      {props.studentArr && props.studentArr.map(student => {
        return (
          <StudentSummary 
            student={student}
            key={student.id}
          />
        )
      })}
    </div>
  )
}

export default StudentList;