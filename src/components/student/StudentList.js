import React from 'react';
import StudentSummary from './StudentSummary';

const StudentList = (props) => {
  
  return (
    <div>
      {props.studentArr && props.studentArr.map(student => {
        return (
          <StudentSummary 
            student={student}
            key={student.id}
            addTag={props.addTag}
            tagInput={props.tagInput}
          />
        )
      })}
    </div>
  )
}

export default StudentList;