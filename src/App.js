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

  render() {
    return (
      <div className='App'>
        <div className='StudentList'>
          <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange}/>
          {this.state.searchInput === '' ? (
            <StudentList studentArr={this.state.studentArr}/>
          ) : (
            <StudentList studentArr={this.state.searchResults}/>
          )}
           
        </div>
      </div>
    );
  }
}

export default App;
