import React from 'react';

import './style.scss';
import ChromeMagic from '../../compontents/ChromeMagic/ChromeMagic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faStackOverflow,faLinkedin } from '@fortawesome/free-brands-svg-icons'
const LandingPage = (props, context) => {

  return (
    // <div>

    <section id="landingSec">
      
      {/* <ChromeMagic/> */}
      <div className="Landing">
        <div className="Inner">
        <div className="Icon"> 
          <img src="./favicon.ico"/>
        </div>
        <div className="content"> 
        <h1>Hello, I am Tanweer</h1>
        <h5> Self-Taught Developer | Gamer | Open-source Ethusiast | </h5>
        </div>

</div>
<div className="Social">
{/*  Git */}
<a target="_blank" href="https://github.com/IamBlueDev"> <FontAwesomeIcon icon={faGithub} size="3x" /></a>
{/*  StackOverflow */}
<a target="_blank" href="https://stackoverflow.com/users/story/11466902"> <FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
{/*  LinkedIn */}

<a target="_blank" href="https://www.linkedin.com/in/tkb/"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>


</div>
      </div>

    </section>
  );
};



export default LandingPage;
