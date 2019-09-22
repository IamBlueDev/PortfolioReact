import React from 'react';

import './style.scss';
import mdx from '../../placeholders/mdxlogo.png';
import mcd from '../../placeholders/mcdlogo.png';
import la from '../../placeholders/LAlogo.png';
import hsbc from '../../placeholders/hsbclogo.png';




const EducationSection = (props, context) => {

  return (

    <section>
            <div id="EduSec">

            <div className="sectionTitle">Experience</div>
            <div className="Container">
            <div className="Work">
            <div className="itemTitle">
                <span>Work</span>
              </div>
              <div className="Item">
                <div className="Icon">
                <img src={mcd}/>
                  </div> 
                <div className="Job">Customer Experience Leader</div>
                <div className="Title">Mcdoanlds</div>

                <div className="Time">September 2017 - Present</div>

              </div>
              <div className="Item">
              <div className="Icon">
                <img src={mdx}/>
                  </div> 
                <div className="Job">Learning Assistant</div>
                <div className="Title">Middlesex University</div>

                <div className="Time">2015-2017</div>

              </div>
              <div className="Item">
              <div className="Icon">
                <img src={hsbc}/>
                  </div> 
                <div className="Job">Accountant</div>
                <div className="Title">HSBC Work Experience</div>

                <div className="Time">Jul 2012</div>

              </div>

            </div>
            
            <div className="Education">
              <div className="itemTitle">
              Education
              </div>

            <div className="Item">
            <div className="Icon">
                <img src={mdx}/>
                  </div> 
                <div className="Edu">BSc Computer Networks</div>
                <div className="Title">Middlesex University</div>

                <div className="Time">2014-2018</div>

              </div>
              <div className="Item">
              <div className="Icon">
                <img src={la}/>
                  </div> 
                <div className="Edu">Engineering (B) | ICT(B) | Media Studies (C)</div>
                <div className="Title">London Academy Sixth Form</div>

                <div className="Time">2011-2014</div>

              </div>
              <div className="Item">
              <div className="Icon">
                <img src={la}/>
                  </div> 
                <div className="Edu">Core GCSEs and 2 BTECs (ICT & Engineering)</div>
                <div className="Title">London Academy</div>

                <div className="Time">2007-2012</div>

              </div>

            </div>


            </div>
            <div className="Footer">Download my <a href="http://tanweerbaig.co.uk/cv" target="_blank">CV</a></div>
            <div className='mouse-container edu'>
            <a href="#landingSec"><div className='mouse'>
           <span  className='scroll-up'></span>
            </div>
            </a>
            <h6>Back to top</h6>
            </div></div>
          </section>

  );
};



export default EducationSection;


// import './style.scss';
// // class Home extends Component {
//   class EducationSection extends Component {
//     render(){
//   return (
//     <div>

//         <section >
//             <div className="blah"></div>
//           </section>
//     </div>
//   )
// }

//   }
// export default EducationSection;
