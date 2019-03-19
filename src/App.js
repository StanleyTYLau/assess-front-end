import React, { Component } from 'react';
import StudentList from './components/student/StudentList'
import SearchBar from './components/layout/searchBar'


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentArr: null,
      searchInput: '',
      searchResults: [],
      tagInput: '',
    };
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(response => response.json())
      .then(data => this.setState({ studentArr: data.students }));
  }

  handleChange = (event) => {
    const input = event.target.value.toLowerCase();
    const students = this.state.studentArr;
    const searchResults = students.filter(student =>
        student.firstName.toLowerCase().includes(input) || student.lastName.toLowerCase().includes(input)
    )
    this.setState({
        searchInput: event.target.value,
        searchResults
    })
  }

  handleTagChange = (event) => {
    const input = event.target.value;
    const students = this.state.studentArr;
    const searchResults = students.filter(student => {
        if (student.tags) {
          let val = ''
          student.tags.forEach((tag) => {
            val = tag.includes(input)
          })
          return val
        }
        else {
          return false
        }
      }    
    )
    this.setState({
        tagInput: event.target.value,
        searchResults
    })
  }

  addTag = (tag, studentId) => {
    let newStudentArr = [...this.state.studentArr]
    newStudentArr[studentId - 1].tags ? (
      newStudentArr[studentId - 1].tags.push(tag)
    ) : (
      newStudentArr[studentId - 1].tags = [tag]
    )
    
    this.setState({
      studentArr: newStudentArr
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='StudentList'>
          <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tagInput={this.state.tagInput} handleTagChange={this.handleTagChange}/>
          {this.state.searchResults.length === 0 || (this.state.searchInput === '' && this.state.tagInput === '') ? (
            <StudentList studentArr={this.state.studentArr} addTag={this.addTag} tagInput={this.state.tagInput}/>
          ) : ( 
            <StudentList studentArr={this.state.searchResults} addTag={this.addTag} tagInput={this.state.tagInput}/>
          )}
           
        </div>
      </div>
    );
  }
}

export default App;
