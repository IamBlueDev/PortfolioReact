import React from 'react';
import './Projects.scss';
import placeholder from './../../imgs/coding.png';
import jsIcon from './../../imgs/Javascript.png';
import reactIcon from './../../imgs/React.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import {linkedInIcon,reactIcon,jsIcon} from './../../Utils/images.js';
class projects extends React.Component{
    state={
        dummyProject:[{           
         "title":"DummyProject#1",
        "lang":["Javascript","C#"],
        "desc":"This is just a dummy project",
        "tags":["Front End","Back End   "],
        },     
        {"title":"DummyProject#2",
        "lang":["Javascript","C#"],
        "desc":"This is just a dummy project",
        "tags":["Front End","Back End   "],
        },
    ],
    }
    
    render(){
        let dummyProjects = this.state.dummyProject.map((item) =>{
            console.log(item.title)
            return(
                <div className="Project" >
                <div className="Title" >{item.title}</div>
                <div className="Icon"><img src={placeholder}/></div>
                <div className="Description">{item.desc}</div>
                <div className="Langs"> 
                
                 <li><img src={jsIcon}/></li>

                <li><img src={reactIcon}/></li>

                <li> <img src={placeholder}/></li> 
                </div>
                {/* <div className="Tags">{item.tags}</div> */}
                   <div className="Tags">

                   <div className="Tag">Javascript</div>
                   <div className="Tag">C#</div>
                   <div className="Tag">Python</div>
                   </div>
                </div>
            )
        })
        return(
            <div className="Projects">
                <h1>Starred Projects</h1>
                {dummyProjects}
                {/* <div className="Title">Projects</div>
                <div className="item">
                    <div className="Title"> #1</div>
                    <div className="Description"></div>
                    <div className="Langauges"> </div>
                    <div>tags</div>
                </div> */}

            </div>
        )
    }
}

export default projects;