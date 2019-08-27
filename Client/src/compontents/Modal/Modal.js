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
        show : true,    
    };

    toggleModal = ()=>{
        console.log(this.state.show)
        this.setState({show : !this.state.show});
    }

    render (){
        // if(!this.props.show){
        //     return null;
        // }
        // {this.state.Modal}
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
                {this.props.live ?(<div><a target="_blank" href={this.props.live}><FontAwesomeIcon icon={faGithub} size="3x"/></a></div>):(<div></div>)}
                {this.props.link ?(<div><a target="_blank" href={this.props.link}><FontAwesomeIcon icon={faGithub} size="3x"/></a></div>):(<div></div>)}


                </div>
                {this.props.show}
                
            </div>
            </div>
        )
    }
}
