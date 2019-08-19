import React from 'react';

import './style.scss';
import ChromeMagic from '../../compontents/ChromeMagic/ChromeMagic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';
import { faGithub,faStackOverflow,faLinkedin } from '@fortawesome/free-brands-svg-icons';
const LandingPage = (props, context) => {

  return (
    // <div>

    <section id="landingSec">

      {/* <ChromeMagic/> */}
      <div className="Landing">
        <div className="Inner">
        <div className="Icon"> 
          <img src="./favicon.png"/>
        </div>
        <div className="content"> 
        <h1>Hello, I am Tanweer</h1>
        <h5> Self-Taught Developer | Gamer | Open-source Ethusiast | </h5>
        </div>

</div>
<div className="Social">
{/*  Git */}
<a  href="https://github.com/IamBlueDev" target="_blank"> <FontAwesomeIcon icon={faGithub} size="3x" /></a>
{/*  StackOverflow */}
<a  href="https://stackoverflow.com/users/story/11466902" target="_blank"> <FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
{/*  LinkedIn */}

<a  href="https://www.linkedin.com/in/tkb/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
<a href="http://tanweerbaig.co.uk/cv" target="_blank"><FontAwesomeIcon icon={faIdCard} size="3x" /></a>

</div>
     <div className='mouse-container'>
  <a href="#ProjSec"><div className='mouse'>
  {/* <a href="#EduSec"><div className='mouse'> */}

      <span  className='scroll-down'></span>
  </div>
</a>
<h6>Projects</h6>
</div>
      </div>
    </section>
  );
};



export default LandingPage;
