import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import ProjectTable from '../routes/main_app/containers/project_table/project_table';
import ProjectsList from '../routes/main_app/containers/projects_list/projects_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ProjectTable />
        <ProjectsList />
      </div>
    );
  }
}

export default App;
