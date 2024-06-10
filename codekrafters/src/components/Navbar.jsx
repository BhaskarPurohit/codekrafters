import React from 'react'
import "../styles/Navbar.css"
import logo from "../assets/CodeCrafters_transparent.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
            <div className="logo-home">
                <img src={logo} alt="" />
            </div>
            <div className="company-title-home">Code Crafters</div>
        </div>
        <div className="nav-right">
            <div className="nav-right-element" id="about-us">About</div>
            <div className="nav-right-element" id='courses'>Courses</div>
            <div className="nav-right-element" id='events'>Events</div>
            <div className="nav-right-element" id='blogs'>Blogs</div>
            <div className="nav-right-element" id='apply-now'>Apply Now</div>
        </div>
    </div>
  )
}

export default Navbar