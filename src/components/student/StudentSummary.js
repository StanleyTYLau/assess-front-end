import React, { Component } from 'react';
import StudentGrades from './StudentGrades'

class StudentSummary extends Component {
  state = {
    showGrades: false,
  }

  handleShow = () => {
    this.setState({
      showGrades: !this.state.showGrades
    })
  }

  render() {
    let sum = this.props.student.grades.reduce((previous, current) => Number(current) + Number(previous));
    let avg = sum / this.props.student.grades.length;

    return (
      <div className='Student'>
        <img className='avatar' src={this.props.student.pic} alt={this.props.student.pic}/>
        <h3>{this.props.student.firstName} {this.props.student.lastName}</h3>
        <button onClick={this.handleShow}>
          {this.state.showGrades ? (<span>-</span>) : (<span>+</span>)}
        </button>
        <div className='details'>Email: {this.props.student.email}</div>
        <div className='details'>Company: {this.props.student.company}</div>
        <div className='details'>Skill: {this.props.student.skill}</div>
        <div className='details'>Average: {avg}%</div>

        {this.state.showGrades ? (
          <StudentGrades grades={this.props.student.grades}/>
        ) : (
          <span></span>
        )}
      </div>
    )
  }
}

// const StudentSummary = ({ student }) => {

//   let sum = student.grades.reduce((previous, current) => Number(current) + Number(previous));
//   let avg = sum / student.grades.length;

//   return (
//     <div className='Student'>
//       <img className='avatar' src={student.pic} alt={student.pic}/>
//       <h3>{student.firstName} {student.lastName}</h3>
//       <div className='details'>Email: {student.email}</div>
//       <div className='details'>Company: {student.company}</div>
//       <div className='details'>Skill: {student.skill}</div>
//       <div className='details'>Average: {avg}%</div>
//     </div>
//   )
// }

export default StudentSummary;