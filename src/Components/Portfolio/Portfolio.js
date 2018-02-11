import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import projects from '../../content/projects';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      projects: projects
    };
  }

  render() {
    const projectobjs = this.state.projects.map( (project) => {
      return <Project 
        name={project.name} 
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