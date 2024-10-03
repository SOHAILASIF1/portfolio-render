import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./Home.css"; // Ensure this file contains your styles

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['MERN Stack Developer.', '& a Frontend Web Designer'],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="home">
      {/* Myself Section */}
      <div className="box-1">
        <h1 className="Heading">
          My Self Sohail Asif <br />
          And I Am <span className="span-heading" ref={typedElement}></span>
        </h1>
        
        <div className='button'>
          <a 
            href="/resume.pdf"
            download
            className='btn'
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Icon Image */}
      <div className="img">
        <img src="/png.png" alt="Icon" className="w-3/4 mx-auto md:w-full" />
      </div>
    </div>
  );
};

export default Home;
