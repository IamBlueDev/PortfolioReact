import React from 'react';
import './SocialBar.scss'
import placeholder from './../../imgs/coding.png'
class socialBar extends React.Component{
    render(){
        return(
            <div className="Social">
                <li className="Item"><img src={placeholder}/></li>
                <li className="Item"><img src={placeholder}/></li>
                <li className="Item"><img src={placeholder}/></li>
                <li className="Item"><img src={placeholder}/></li>
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