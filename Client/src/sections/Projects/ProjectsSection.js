import React from 'react';

import './style.scss';

const ProjectsSection = (props, context) => {
  let isRendered = true;
let products = [{itemName:'BlaJh', itemLang:"Java"},{itemName:'Blah'},{itemName:'Blah'},{itemName:'Blah'},{itemName:'Blah'},{itemName:'Blah'}];
let blah = products.map( product => {
  return(
    <div className="Item">
    <div className="ItemLanguage"> <h6>{product.itemLang ? product.itemLang :"C#"}</h6></div>
  <div className="ItemIcon">
      <img src="../logo.svg"/>
      </div>
    <div className="ItemTitle">
      <h6>{product.itemName}</h6>
      </div>
  </div>

  );
})
  return (
    <section>
            <div id="ProjSec">
              <div className="sectionTitle">My Projects</div>
            <div className="Nav">C#</div>
            <div className="Container">
              {isRendered ? <div className = "Items">
{blah}
            
            </div>: <div className = "SelectedItem" >
           
            <div className="Container">

              <div className="ScrollableImage">ScrollableImage?</div>
              <div className="Title">ITEM TITLE</div>
              <div className="Description"> Short Description </div>
              <div className="Goal">Goals</div>
              </div>
              <div className="Button">Back</div>
              <div className="GitHubLink">Just an Image</div>
            </div>}
</div>
       <div className="Footer">More on <a href="#">GitHub</a></div>
            </div>
          </section>

  );
};



export default ProjectsSection;


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
