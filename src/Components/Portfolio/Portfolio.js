import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import projects from '../../content/projects';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      projects: [{ name: 'MovieTracker', gitHub: 'https://www.github.com/NikBorn/movie-tracker', website:'', tech: ['React-redux', 'Asyncronous Javascript Calls', 'CSS3', 'HTML5', 'ES6']}, 
        { name: 'PalettePicker', gitHub: 'https://www.github.com/NikBorn/mod4-Palette-Picker', website: 'https://nikb-palette-picker.herokuapp.com/' }, 
        { name: 'Headcount', gitHub: 'https://www.github.com/NikBorn/Headcount2.0', website: ''}]
    };
  }

  render() {
    const projectobjs = projects.map( (project) => {
      return <Project name={project.name} 
        key={project.name} 
        isSelected={project.isSelected} 
        gitHub={project.gitHub}
        website={project.website}
        tech={project.tech} 
        description={project.description}/>;
    });
    
    
    return (
      <main className='portfolio-page'>
        <div className='page-header'>
          <h3>
            My Portfolio
          </h3>
        </div>
        <div className='project-container'>
          { projectobjs }
        </div>
      </main>
    );
  }
}

export default Portfolio;