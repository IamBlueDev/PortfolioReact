import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/base.scss'
import TopBar from './components/TopBar/TopBar';
import Main from './pages/Main/Main';
import Projects from './pages/Projects/Projects';
import visualContext from './Utils/context/visualContext';
import SocialBar from './components/socialBar/SocialBar';
import Experience from './pages/Experience/Experience';
class App extends React.Component{

 state={
  bkah:true,
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () =>{
    
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    // this.setState({})
    let mode = "Large"

    
    // if(windowWidth <= 640)
    //   mode = "mobile";
    // else if ( windowWidth > 641 && windowWidth <= 1007)
    //   mode = "tablet";    
    // else if (windowWidth )
      // console.log(mode)
      // console.log("Screen Width:" + windowWidth)
    this.setState({ windowHeight, windowWidth});
  }
  // updateDimensions() {
  // }

  render(){
    // console.log(this.state.windowHeight)
    return(
      <visualContext.Provider value={{
        colorSchme:this.state.colorSchme,
        windowHeight:this.state.windowHeight,
        windowWidth : this.state.windowWidth,
        mode: this.state.mode,
        setMode: this.setMode,
        }}>
      <div className="App">
        {/* hello  */}
        {/* {this.state.windowWidth} */}
        <TopBar/>
        <div className="R_Content">

        <Main /> 
        <Projects/>
        <Experience/>
        </div>
        <SocialBar/>
      </div>
      </visualContext.Provider>
    )
  }
}


export default App;
