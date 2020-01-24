import React from 'react';
import  './TopBar.scss'
class topBar extends React.Component{
   state = {
    windowState : "mobile",
    }
    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
    }
  
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    }      

    onKeyPressed(e) {
        // console.log(e.keyCode);
        if(e.keyCode === 87){
            
            console.log("W key pressed");

        }
      }
    
        render(){
            return(
                <div className ="topBar" id={this.state.windowState} >
                    <div>=</div>
                    <div>T B</div>
                
                </div>
            )
        }
}   

export default topBar;