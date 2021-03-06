import React from 'react';
import './Project.css';
import PropTypes from 'prop-types';


const Project = (props) => {

  const projectPreviewClassNames = `project-preview-${props.name} project-preview`;
  const projectLinks = () => {
    if (props.website) {
      return (
        <div className='website-container'>
          <a href={props.website} target='_blank'>Website</a>
          <a href={props.gitHub} target='_blank'>Github</a>
        </div>
      );
      
    } else {
      return (
        <div className='website-container'>
          <a href={props.gitHub} target='_blank'>Github</a>
        </div>
      );
    }
  };
  return (
    <div className='project' >
      <div className={projectPreviewClassNames} >
      </div>
      <h3 className='project-name'>{props.name}</h3>
      <div className='project-info'>
        {projectLinks()}
        <p>TECH: {props.tech}</p>
        <br/>
        <p>DESCRIPTION: {props.description}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  website: PropTypes.string,
  gitHub: PropTypes.string,
  tech: PropTypes.string,
  description: PropTypes.string
};

export default Project;