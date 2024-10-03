import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <header className="header">

      <div className="logo1">
       
        <h1 className="logo-heading">
          SA
        </h1>
        </div>

        {/* Navigation Links */}
        <nav className=''>
          <ul className=" NavIcon">
            <li>
              <Link
                to="/"
                className=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className=""
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className=""
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className=""
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=""
              >
                Contact Us
              </Link>
            </li>
          </ul>

         
        </nav>

        {/* Download Button */}
        <div className="">
          <a
            href="/resume.pdf" // Update this path to your actual CV file
            download
            className="btn"
          >
            Download CV
          </a>
        </div>
     

        
    </header>
  );
}

export default Header;
