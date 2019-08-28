import React from "react";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../placeholders/pPlaceholder.png';
import shop from '../../placeholders/list.png';
import port from '../../placeholders/port.png';

import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faReact,
  faNode,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {faInfinity,faCopyright,faDatabase,faDesktop} from '@fortawesome/free-solid-svg-icons';

import Modal from '../../compontents/Modal/Modal';
const ReactMarkdown = require('react-markdown')
const breaks = require('remark-breaks')
class ProjectsSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRendered: true,
      projects: [],
      selectedProject: [],
      cats: [{cat:"All",icon:faInfinity}, {cat:"React",icon:faReact}, {cat:"Java",icon:faJava}, {cat:"Python",icon:faPython}, {cat:"C#",icon:faCopyright}],
      langs: [{cat:"All",icon:faInfinity},
      {cat:"NodeJS",icon:faNode}, 
      {cat:"Express",icon:faDatabase},
      {cat:"Sequelize",icon:faDatabase}, 
      {cat:"MySQL",icon:faDatabase}, 
      {cat:"MongoDB",icon:faDatabase}, 
      {cat:"React",icon:faReact}, 
      {cat:"Java",icon:faJava}, 
      {cat:"Python",icon:faPython}, 
      {cat:"C#",icon:faCopyright},
      {cat:"Unity3D",icon:faCopyright}],
      
      Modal:false,
      GitHubLink:"https://github.com/IamBlueDev",
      // cats: [{cat:"All",icon:"test"}, "React", "Java", "Python", "C#"],
      displayedCat: "All",
    };
  }
  componentDidMount() {
    this.getMyData();
  }

  GetOut = async args => {
    this.setState({ isRendered: true, selectedProject: [], Modal : false });
  };

  handleProjectSelect = async args => {


    this.setState({ isRendered: false, selectedProject: args, Modal : !this.state.Modal });
    console.log("lano");
  };

  findArrayElementByTitle = async (array, title) => {
    // console.log(title);
    return array.find((element) => {
      return element.cat === title;
    })
  };
  //  findArrayElementByTitle = aysnc (array, title) => {
  //   return array.find((element) => {
  //     return element.title === title;
  //   })
  // }
  getLangs = (object) =>{
    const list = object.split(",");
    // console.log(list);
      return list.map((cat,index) => {
        // console.log(this.state.cats["0"]);
        const test = this.state.langs.find((element) => {
          return element.cat === cat;
        })
        console.log(cat);
         console.log(test);
        return (


          (typeof test !=='undefined')?<p><FontAwesomeIcon icon={test.icon} size="2x"/>{test.cat}</p>:<div></div>
          // {test &&
          //   <p><FontAwesomeIcon icon={test.icon} size="2x"/></p>}
        
        // <p><FontAwesomeIcon icon={this.state.cats[cat].icon} size="2x"/></p>
        )
      })
  }

  loadCats = ()=>{
    return Object.keys(this.state.cats).map((cat, index) =>{
      // console.log(cat);
      // this.state.cats.map(cat,icon => {
        return (
          <div className="Item" onClick={this.setCategory.bind(this, this.state.cats[cat].cat)}><FontAwesomeIcon icon={this.state.cats[cat].icon} size="2x"/> {this.state.cats[cat].cat}</div>
        )
      })
  }

  getMyData = async () => {
    fetch("http://tanweerbaig.co.uk/api/p")
    // fetch("http://192.168.1.2:3001/api/p")    
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data.data });
      })
      .catch(err => console.log(err));
  };
  setCategory = (cat) => {
    this.setState({ displayedCat: cat });
  }
  render() {
    
    const projects = this.state.projects
      .filter(
        ({ lang }) =>
          this.state.displayedCat === lang || this.state.displayedCat === "All"
      )
      .map(object => {
        // console.log(object)
        // object.langs = "React,Java,NodeJS"

        return (
          <div className="Item ">

            <div class="ribbon"><span>{object.status}</span></div>
             <div className="ItemIcon"
            onClick={this.handleProjectSelect.bind(this, object)}
            co
            >
              {/* {object.icon = logo} */}
              <img src={"http://tanweerbaig.co.uk/img/"+ object.logo+".png"} />
              </div>
              <div className="ItemTitle">
              <h6>{object.name}</h6> 
            </div>
              <div className="Quick_Links"><p>Quick Info</p></div>
              <div className="QuickInfo_Content">
                {/* <div className="Langs"><p> <FontAwesomeIcon icon={faReact} size="3x"/></p><p><FontAwesomeIcon icon={faNode} size="3x"/></p></div> */}
                {/* {object.langs = "React,Java,NodeJS"} */}
              {console.log(object.info)}
                <div className="Langs">{this.getLangs(object.info)}</div>
                <h5>Links</h5>
                <div className="Links"> 
                  {/* <a style={{display: "table-cell"}} href={this.state.GitHubLink+"/"+object.link} target="_blank"> */}
                  {object.live ?(<a target="_blank" href={object.live}><FontAwesomeIcon icon={faDesktop} size="3x"/></a>):(<div></div>)}
                {object.link ?(<a target="_blank" href={this.state.GitHubLink+"/"+object.link}><FontAwesomeIcon icon={faGithub} size="3x"/></a>):(<div></div>)}

             
                                   {/* <a href={GitHubLink+"/"+object.link}> */}
                      {/* <FontAwesomeIcon icon={faGithub} size="3x"/> </a> */}
                      </div>
              </div>
          </div>
        );
      });


    const categories = this.loadCats();

    const selectProject = this.state.selectedProject;
    
    return (
      <section>

        <div id="ProjSec">

                     {!this.state.isRendered ? 
         
                     ( 
                     <Modal 
                      title={selectProject.name} 
                      img={selectProject.logo} 
                      desc={selectProject.description} 
                     link={this.state.GitHubLink+"/"+selectProject.link} 
                      live={selectProject.live} 
                      show ={<div className="Close" onClick={this.GetOut}>
                        Close
                        </div>} >
                        {<ReactMarkdown plugins={[breaks]}
                         source={selectProject.content} />}
                         </Modal>): ( <div></div>)}


          <div className="sectionTitle">My Projects</div>
          <div className="Nav">{categories}</div>
          <div className="Container">

            <div className="Items">{projects}</div>
            </div>


          
          <div className="Footer">
            More on <a  href={this.state.GitHubLink} target="_blank">GitHub</a>
          </div>
        
          
          <div className='mouse-container absolute'>
  <a href="#EduSec"><div className='mouse'>

      <span  className='scroll-down'></span>
  </div>
</a>
<h6>Education</h6>
</div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;


