import React, { Component } from 'react';

// Full.js serves as the container for the entire app.

// STYLESHEET
import '../../styles/compiler.scss';

// CONTAINERS
import Splash from '../Splash/Splash.js';
import Section from '../Section/Section.js';

// COMPONENTS

// IMAGES

//import logo from './logo.svg';

function Full() {
  const aboutme = "aboutme";
  const skills = "skills";
  const experience = "experience";
  const projects = "projects";
  const contact = "contact";

  return (
    <div className="full">
      <Splash />
      <div className="spacer" style={{marginTop: '100vh', height: '4000px'}}></div>
      <Section title={aboutme}  />
      <Section title={skills} />
      <Section title={experience} />
      <Section title={projects} />
      <Section title={contact} />
    </div>
  );
}

export default Full;
