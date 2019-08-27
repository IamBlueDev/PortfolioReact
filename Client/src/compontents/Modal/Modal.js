import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faStackOverflow,
    faLinkedin,
    faReact,
    faNode,
    faPython,
    faJava,
  } from "@fortawesome/free-brands-svg-icons";

export default class Modal extends Component{
    state =
    {
        show : false,    
    };

    toggleModal = ()=>{
        this.setState({show : !this.state.show});
    }

    render (){
        if(!this.props.show){
            return null;
        }
        return (
            
            <div className="Modal">
                <img src={"http://tanweerbaig.co.uk/img/"+this.props.img+".png"}/>
                <h1>{this.props.title}</h1>

                <div className="Container"> 
                <div className="Description">
                <h6>  Short Description</h6>
                    <p>{this.props.desc}</p>
                </div>
                <div className="Goal">
                <h6>Goals</h6>
                    <p>{this.props.children}</p></div>
                

                <div className="Social">
                    {/* github */}
                    {/* Live project? */}
                </div>

                
            </div>
            </div>
        )
    }
}
