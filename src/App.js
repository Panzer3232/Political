import React,{Component} from 'react';
import {Link} from "react-router-dom";
import pfp from "./Images/cm.jpg";
import './App.css';
import Main from "./components/main";

class App extends Component {
  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render(){
  return (
    <div classNameName="App">
       <nav>
          <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
          <Link to="/" className="brand-logo">Vinod Ashri</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/photo">Photo Gallery</Link></li>
          <li><a href="https://haryana.gov.in/index.html">Government</a></li>
          </ul>
          </div>
       </nav>
       <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src="pgp.jpg"/>
      </div>
      <a href="#user"><img className="circle" src={pfp}/></a>
      <a href="#name"><span className="white-text name">John Doe</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><Link to="/contact"><i className="material-icons">Contact</i>Contact</Link></li>
    <li><Link to="/photo">Gallery</Link></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">More Information</a></li>
    <li><a className="waves-effect" href="https://haryana.gov.in/index.html">Governemt</a></li>
  </ul>
      <Main></Main>
    </div>
  );
}
}

export default App;
