import React from "react";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faStackOverflow,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class ProjectsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: true,
      projects: [],
      selectedProject: [],
      cats: ["All","React", "Java","Python","C#"],
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
    console.log(args);
    console.log("lano");
  };

  getMyData = async () => {
    fetch("http://localhost:3001/api/p")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data.data });
      })
      .catch(err => console.log(err));
  };
  setCategory = (cat)=>{
    this.setState({displayedCat:cat});
  }
  render() {

    const projects = this.state.projects
      .filter(
        ({ lang }) =>
          this.state.displayedCat === lang || this.state.displayedCat === "All"
      )
      .map(object => {
        return (
          <div
            className="Item"
            onClick={this.handleProjectSelect.bind(this, object)}
          >
            <div className="ItemLanguage">
              {" "}
              <h6>{object.lang}</h6>
            </div>
            <div className="ItemIcon">
              <img src="../logo.svg" />
            </div>
            <div className="ItemTitle">
              <h6>{object.name}</h6>
            </div>
          </div>
        );
      });

      const categories = this.state.cats.map(cat =>{
        return(
        <div className="Item" onClick={this.setCategory.bind(this, cat)}>{cat}</div>
      )})

    const GitHubLink = "https://github.com/IamBlueDev";
    const selectProject = this.state.selectedProject;
    return (
      <section>
        
        <div id="ProjSec">
          <div className="sectionTitle">My Projects</div>
          <div className="Nav">{categories}</div>
          <div className="Container">
            {this.state.isRendered ? (
              <div className="Items">{projects}</div>
            ) : (
                <div className="SelectedItem">
                  <div className="Container">
                    <div className="ScrollableImage">ScrollableImage?</div>
                    <div className="Title">Title: {selectProject.name}</div>
                    <div className="Description">
                      {" "}
                      Short Description
                    <p>{selectProject.description}</p>
                    </div>
                    <div className="Goal">
                      Goals
                    <p>{selectProject.content}</p>
                    </div>
                  </div>
                  {/* <button  onClick={this.GetOut}>Back </button>  */}
                  <div className="Button" onClick={this.GetOut}>
                    Back
                </div>
                  <div className="GitHubLink">
                    <a href={GitHubLink}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              )}
          </div>
          <div className="Footer">
            More on <a href={GitHubLink}>GitHub</a>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;


