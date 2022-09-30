import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import png from '../images/png.png'
import Typewriter from 'typewriter-effect';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const NavBar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [color, setColor] = useState(false)
 
 
  
    const changebg = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
  window.addEventListener("scroll", changebg)
    return (
        <div  className='img-test'>
    <div className={color ? "changenav" :"bgs" } >
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Md</span>As
            <span>I</span>Kur
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
               <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
               <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <i class="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
        </div>
        <div className='main-img'>
        <img src={png} className="img img-fluid"/>
  
          </div>
          <div className='mains'>
              <h4>I'm</h4>
              <h1>Asikur</h1>
              <h3>
        <Typewriter 
       options={{
      strings: [ 'Web Developer',"Web Designer","Software Engineer","Youtuber"],//npm i typewriter-effect
       autoStart: true,
              loop: true,
       delay:80,
       }}
/></h3> 
              <button>Learn More<ArrowRightAltIcon style={{fontSize:"2.2rem"}} /></button>
              <button>Hire Me<ArrowRightAltIcon style={{fontSize:"2.2rem"}}/></button>
        </div>
        
            </div>
  );
};

export default NavBar;