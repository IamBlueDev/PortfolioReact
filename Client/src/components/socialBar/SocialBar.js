import React from 'react';
import './SocialBar.scss'
import placeholder from './../../imgs/coding.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faStackOverflow,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
class socialBar extends React.Component{
    render(){
        return(
            <div className="Social">
                <div className="Title"><p>PAGE TITLE</p></div>
                <li className="Item" id="LinkedIn"><FontAwesomeIcon className="img" icon={faLinkedin}/></li>
                <li className="Item" id="LinkedIn"><FontAwesomeIcon className="img" icon={faGithub}/></li>
                <li className="Item" id="LinkedIn"><FontAwesomeIcon className="img" icon={faStackOverflow}/></li>
                <li className="Item" id="LinkedIn"><FontAwesomeIcon className="img" icon={faIdCard}/></li>

                {/* <li className="Item"><img src={placeholder}/></li> */}
                {/* <li className="Item"><img src={placeholder}/></li> */}
                {/* <li className="Item"><img src={placeholder}/></li> */}
                {/* <li className="Item"><img src={placeholder}/></li> */}
                </div>
        )
    }
}
// const socialBar = ()=>{
//         return(

//             <div>
//                 Items
//                 Go d
//                 Here
//             </div>
//         );
// }


export default socialBar;