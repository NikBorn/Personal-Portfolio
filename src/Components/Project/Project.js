import React from 'react';
import './Project.css';
import PropTypes from 'prop-types';


const Project = (props) => {

  const projectPreview = `project-preview-${props.name} project-preview`;

  return (
    <div className='project' >
      <h3 className='project-name'>{props.name}</h3>
      <div className='project-overview'>
        <div className='project-info'>
          <a href={props.website} target='_blank'>Website</a>
          <a href={props.gitHub} target='_blank'>Github</a>
          <br />
          <p>TECH: {props.tech}</p>
          <br/>
          <p>DESCRIPTION: {props.description}</p>
        </div>
      </div>
      <div className={projectPreview} >
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