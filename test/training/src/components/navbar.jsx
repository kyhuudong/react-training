import React, {Component} from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
}



// class NavBar extends Component{
//     render(){
//         return(
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     NavBar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

export default NavBar;