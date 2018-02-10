import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      projects: [{ name: 'MovieTracker', isSelected: false, gitHub: 'https://www.github.com/NikBorn/movie-tracker', website:''}, 
        { name: 'PalettePicker', isSelected: false, gitHub: 'https://www.github.com/NikBorn/mod4-Palette-Picker', website: 'https://nikb-palette-picker.herokuapp.com/' }, 
        { name: 'Headcount', isSelected: false, gitHub: 'https://www.github.com/NikBorn/Headcount2.0', website: ''}]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const newState = [...this.state.projects].map(project => {
      if (project.name === name) {
        project.isSelected = !project.isSelected;
      }
      return project;
    });
    this.setState({ projects: newState});
  }

  render() {
    const projects = this.state.projects.map( (project) => {
      return <Project name={project.name} 
        key={project.name} 
        isSelected={project.isSelected} 
        gitHub={project.gitHub}
        website={project.website}
        handleClick={this.handleClick} />;
    });
    
    
    return (
      <main className='portfolio-page'>
        <div className='page-header'>
          <h3>
            My Portfolio
          </h3>
        </div>
        <div className='project-container'>
          { projects }
        </div>
      </main>
    );
  }
}

export default Portfolio;