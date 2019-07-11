import React from 'react';
import '../styles/main.scss'
import ChromeMagic from '../compontents/ChromeMagic/ChromeMagic'
class J extends React.Component {
    render(){
        return(
            <div class="Main">
               <ChromeMagic/>
            {/* {this.props.children} */}
            <div class='parallax'>
            <div id='stars1'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div>
            </div>
          
        )
    }
}

export default J;