import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import MainSection from './sections/main';
import LandingPage from './sections/LandingSection/LandingSection';
import EducationSection from './sections/Education/EducationSection';
import ProjectsSection from './sections/Projects/ProjectsSection';

import ChromeMagic from './compontents/ChromeMagic/ChromeMagic'


// function App() {

  class App extends Component {

  render(){

  return (
    <div id='wrapper' className="theme-light">
  
          {/* <div className="parallax">
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div> */}
    <ChromeMagic/>
    <LandingPage />
    <ProjectsSection/>
    <EducationSection/>
    </div>
      // <div id="Main">

      //  <MainSection/>
      //  <section>

      //  <div className="Landing">
      //    <h1>Hello, I am Tanweer</h1>
      //    </div>
      //  </section>
      //  <section>
      //    <div className="Main">
      //    <h1>This will contain projects</h1>
      //    </div>
      //    </section>
      // </div>

  );
}}

export default App;
