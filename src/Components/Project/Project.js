import React, { Component } from 'react';

const Project = (props) => {

  const projectPreview = `project-preview-${props.name}`
  const projectInfo = props.isSelected === false ? `project-info` : `project-info project-info-expanded`
  const isExpanded = props.isSelected === false ? `project` : `project project-expanded`

  return (
    <div className={isExpanded} >
      <h3 className='project-name'>{props.name}</h3>
      <div className={projectPreview} onClick={() => {
        props.handleClick(props.name)
      }}>
      </div>
      <div className={projectInfo}>
        <a href={props.website} target='_blank'>Website</a>
        <a href={props.gitHub} target='_blank'>Github</a>
        <p>Short description about the project.  Talk about the tech stack,challenges, and things that went well.</p>
      </div>
    </div>
  )
}

export default Project;