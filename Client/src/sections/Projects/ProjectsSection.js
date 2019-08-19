import React from "react";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../placeholders/pPlaceholder.png'
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faReact,
  faNode,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {faInfinity,faCopyright} from '@fortawesome/free-solid-svg-icons';
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
     
      // cats: [{cat:"All",icon:"test"}, "React", "Java", "Python", "C#"],
      displayedCat: "All"
    };
  }
  componentDidMount() {
    this.getMyData();
  }

  GetOut = async args => {
    this.setState({ isRendered: true, selectedProject: [] });
  };

  handleProjectSelect = async args => {


    this.setState({ isRendered: false, selectedProject: args });
    console.log("lano");
  };n

  getMyData = async () => {
    fetch("http://tanweerbaig.co.uk/api/p")
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
    const GitHubLink = "https://github.com/IamBlueDev";
    const projects = this.state.projects
      .filter(
        ({ lang }) =>
          this.state.displayedCat === lang || this.state.displayedCat === "All"
      )
      .map(object => {
        return (
          <div
            className="Item "
          >

            <div class="ribbon"><span>{object.status}</span></div>
             <div className="ItemIcon"
            onClick={this.handleProjectSelect.bind(this, object)}
            co
            >
              <img src={logo} />
              </div>
              <div className="ItemTitle">
              <h6>{object.name}</h6> 
            </div>
              <div className="Quick_Links"><p>Quick Info</p></div>
              <div className="QuickInfo_Content">
                <div className="Langs"><p> <FontAwesomeIcon icon={faReact} size="3x"/></p><p><FontAwesomeIcon icon={faNode} size="3x"/></p></div>
                <div className="Links"> <h5>Links</h5>
                  <a style={{display: "table-cell"}} href={GitHubLink+"/"+object.link} target="_blank">
                                  
                                   {/* <a href={GitHubLink+"/"+object.link}> */}
                      <FontAwesomeIcon icon={faGithub} size="3x"/> </a></div>
              </div>
            {/* <div className=" ribbion ribbion-top-left">
              <h6>{object.lang}</h6>
            </div>
            <div className="ItemStatus ribbon ribbon-top-right" >
              {" "}
              <span>{object.status}</span>
            </div>
            {/* <div class="ribbon ribbon-top-left"><span>ribbon</span></div> */}
          {/* 
            <div className="ItemIcon"
            onClick={this.handleProjectSelect.bind(this, object)}
            co
            >
              <img src={logo} />
              {/* <img src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"/> */}
              {/* <img src="https://www.easypromosapp.com/blog/en/wp-content/uploads/random_piker_to_select_the_winner_of_your_conetst.jpg" /> */}
            {/* </div> 

            <div className="ItemTitle">
              <h6>{object.name}</h6> 
            </div>*/}
          </div>
        );
      });

    const categories = 
    Object.keys(this.state.cats).map((cat, index) =>{

    // this.state.cats.map(cat,icon => {
      return (
        <div className="Item" onClick={this.setCategory.bind(this, this.state.cats[cat].cat)}><FontAwesomeIcon icon={this.state.cats[cat].icon} size="2x"/> {this.state.cats[cat].cat}</div>
      )
    })

    // const GitHubLink = "https://github.com/IamBlueDev";
    const selectProject = this.state.selectedProject;
    return (
      <section>

        <div id="ProjSec">
          <div className="sectionTitle">My Projects</div>
          {this.state.isRendered ? (<div className="Nav">{categories}</div>) : (<div></div>)}
          <div className="Container">
            {this.state.isRendered ? (
              <div className="Items">{projects}</div>
            ) : (
                <div className="SelectedItem">
                  <div className="ItemStatus">
              <h6>{selectProject.status}</h6>
            </div>
                  <div className="Container">
                    <div className="ScrollableImage"><img src={logo}/></div>
                    <div className="Title"><h6>{selectProject.name}</h6></div>
                    <div className="Description">
                      {" "}
                      <h6>  Short Description</h6>
                      {<ReactMarkdown source={selectProject.description} escapeHtml={true} /> }
                    </div>
                    <div className="Goal">
                      <h6>Goals</h6>


                      {<ReactMarkdown plugins={[breaks]} source={selectProject.content} />}
                    </div>
                  </div>
                  {/* <button  onClick={this.GetOut}>Back </button>  */}
                  <div className="Button" onClick={this.GetOut}>
                    Back
                </div>
                
                  <div className="GitHubLink">
                    <a href={GitHubLink+"/"+selectProject.link}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              )}
          </div>
          <div className="Footer">
            More on <a  href={GitHubLink} target="_blank">GitHub</a>
            {/* style={{display: "table-cell"}} href={GitHubLink+"/"+object.link} target="_blank" */}
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


