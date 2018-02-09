import React, { Component } from 'react';
import './Project.css';

const Project = (props) => {

  const projectPreview = `project-preview-${props.name}`
  const projectInfo = props.isSelected === false ? `project-info` : `project-info project-info-expanded`
  // const isExpanded = props.isSelected === false ? `project` : `project project-expanded`

  return (
    <div className='project' >
      <h3 className='project-name'>{props.name}</h3>
      <div className='project-overview'>
        <div className={projectInfo}>
          <a href={props.website} target='_blank'>Website</a>
          <a href={props.gitHub} target='_blank'>Github</a>
          <p>Short description about the project.  Talk about the tech stack,challenges, and things that went well.</p>
        </div>
      </div>
      <div className={projectPreview} >
      </div>
     
    </div>
  )
}

export default Project;