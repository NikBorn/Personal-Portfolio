import React from 'react';
import './Resume.css';
import '../../content/NikBornemeierFrontendResume.pdf'

const Resume = () => {
  return (
    <main className='resume'>
      <h4>PROFILE</h4>
      <p>
        I am a Denver based web developer with a passion for creativity and continuing education. I am excited to continue to learn and write complex code. I am currently looking to join a collaborative developement team in the Denver metro area or Boulder.
      </p>
      <h4>SKILLS</h4>
      <h3>
        HTML5 - CSS3 - JavaScript - React - React-Redux - jQuery - Git - GitHub - Agile Development - Node.js - Express.js
      </h3>
      <h4>PROJECTS</h4>
      <p>
        Palette Picker
        <br/>
        <strong>HTML5, JQUERY, EXPRESS, JEST</strong>
        <br/>
        Palette Picker was an individual Project in which a user can generate a random five color palette and save it to a project to be used later. This was the first project in which we were tasked with creating a server and database on the backend.
        <br/>
        <br/>
        Movie Tracker
        <br/>
        <strong>HTML5, REACT, REACT-REDUX, REACT-ROUTER, SCSS, ASYNC API CALLS, JEST</strong>
        <br/>
        Movie Tacker was a three person group project in which we were tasked with creating a simplified front-end version of Netflix. This was our first experience writing a redux web application. We created a single page web app that makes asynchronous API calls and displays new movies with a summary and user ratings.
      </p>
      <h4>EXPERIENCE</h4>
      <p>
        Turing School of Software and Design Denver, CO
        <br/>
        I completed an intensive coding bootcamp in which I learned HTML5, CSS3, Javascript(ES5/ES6), jQuery, React, Redux, Object Oriented and Functional Programming, Test Driven Development, Git/GitHub, Node.js, Express.js, Knex.js, PostgreSQL, and collaborative programming.
        <br/><br/>
        Practice Manager, Therapies of the Rockies Denver/Colo. Springs, CO
        <br/>
        I managed everything outside of speech therapy for a practice that started with one office in Aurora. I was the second employee and grew the company to 6 therapists and 2 office managers in just under three years, while also increasing revenues from approx. $70,000/yr. to over $450,000/yr.
        <br/><br/>
        Manager, Advantage Logistics Denver, CO
        <br/>
        Working directly with Walmart I managed a team of over 30 delivery drivers, for Walmarts online grocery delivery system. Hired, trained, and managed all employees and handled all day to day actvities.
      </p>
      <h4>EDUCATION</h4>
      <p>
        University of Colorado – BS in Business with an emphasis in Marketing 2005
      </p>
      <a href={require('../../content/NikBornemeierFrontendResume.pdf')} download>Download</a>
    </main>
  );

};

export default Resume;