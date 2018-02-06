import React, { Component } from 'react';
import './Portfolio.css'

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  render() {

    return (
      <main className='portfolio-page'>
        <div className='page-header'>
          <h3>
            My Portfolio
          </h3>
        </div>
          <div className='project-container'>

            <div className='project'>
              <h3 className='project-name'>MovieTracker</h3>
              <div className='project-preview-1'>
              </div>
            </div>

            <div className='project project2'>
              <h3 className='project-name'>Palette Picker</h3>
              <div className='project-preview-2'>
              </div>
            </div>

            <div className='project'>
              <h3 className='project-name'>Headcount</h3>
              <div className='project-preview-3'>
              </div>
            </div>
          </div>
      </main>
    )
  }
}

export default Portfolio;