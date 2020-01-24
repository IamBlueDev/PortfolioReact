import React from 'react';
import './Experience.scss';
import placeholder from './../../imgs/coding.png';
import jsIcon from './../../imgs/Javascript.png';
import reactIcon from './../../imgs/React.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import {linkedInIcon,reactIcon,jsIcon} from './../../Utils/images.js';
class experience extends React.Component{
    render(){
        return(
            <div className="Exp">
                <h1>Experience</h1>

            <div className="Event Work">
                <div className="dot" >.</div>
                <div className="Till">Now</div>
                <div className="Content">

                <div className="Title ">
                   Hire me
                </div>
                <div className="Read">Interested?</div>
                </div>
            </div>
            <div className="Event Edu">
                <div className="dot" >.</div>
                <div className="Till">Current</div>
                <div className="Content">

                <div className="Title ">
                   Papa Johns
                </div>
                <div className="Time">From:24</div>
                <div className="Read">Read More</div>
                </div>
            </div>
            <div className="Event Work">
                <div className="dot" >.</div>
                <div className="Till">28/02/2019</div>
                <div className="Content">

                <div className="Title ">
                   Papa Johns
                </div>

                <div className="Time">From:24</div>
                <div className="Read">Read More</div>
                </div>
            </div>
            </div>
        )
    }
}

export default experience;