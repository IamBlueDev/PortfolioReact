import React from 'react'
import icon from '../../imgs/icon.png'
import './Landing.scss'
class MainPage extends React.Component{
    state = {
        windowState : "mobile",
        }
    render(){
        
        return (
            <div className="Landing" >
                {/* <h1>Welcome!</h1> */}
                {/* <div className="Socails"><li>Link</li><li>Git</li><li>Resume</li></div> */}
                <div className="Logo"><img src={icon}/></div>
                <div className="Intro"> <li>Hey, I'm Tanweer, heres a quick few points about me.</li>
                    <li>Self Taught Programmer, Open source ethuziest, </li>
                </div>
            </div>
        )
    }
}
export default MainPage;