import React, { useState } from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navigation = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
                      <h2 className="text-red-500">
                          <a href="#home">Nayim Hasan</a>
              
            </h2>
          </div>
  
          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                             
                              <a href="#project">Project</a>
              </li>
              <li>
                      
                              <a href="#tech">Skills</a>
              </li>
              <li>
                <a href="#contactme">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* 3rd social media links */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a
                  href="https://github.com/Nayimh"
                  target="_blank" rel="noreferrer">
                  <AiFillGithub className="github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nayim-hasan/"
                  target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="linkedin" />
                </a>
              </li>
              <li>
              <a
                  href="https://www.linkedin.com/in/nayim-hasan/"
                  target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="linkedin" />
                </a>
              </li>
            </ul>
  
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
  
       
      </>
    );
};

export default Navigation;