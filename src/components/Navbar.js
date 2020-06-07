import React from "react"
import logo from "../assets/logo.png"
import "./Navbar.css"
import avatar from "../assets/avatar.jpg"
const Navbar = () => {
    return (
        <div className="navbar">
        <div class="ui secondary menu">
  <div class="header item">
    <img className="logo" style={{height:"4rem",width:"12rem"}}src={logo}/>
  </div>
  <div className="ui right secondary menu">
 
  <a class="item">
  <i class="map pin large orange icon"></i>
  Bangalore
  </a>
  <a class="item">
  <i class="shopping bag large orange icon"></i>
  </a>
  <div class=" ui simple dropdown item">
  
  <img style={{height:"2.5rem",width:"2.5rem"}}class="ui avatar image" src={avatar}/>
  <div class="menu">
      <div class="item"><i className=" clipboard list icon blue"></i>My Orders</div>
      <div class="item"><i className=" user circle outline icon blue"></i>Profile</div>
      <div class="item"><i class="sign-out icon blue"></i>Sign Out</div>
    </div>
  </div>
  </div>
</div>
</div>
    )
}

export default Navbar;