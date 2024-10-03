import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./Home.css"; // Ensure this file contains your styles
import FindMe from '../../component/FindMe/FindMe';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['MERN Stack Developer.', '& a Frontend Web Designer'],
      typeSpeed: 100,      // Speed of typing
      backSpeed: 50,       // Speed of deleting
      backDelay: 1000,     // Delay before starting to delete
      loop: true,          // Loop through the strings
      showCursor: true,    // Show the cursor
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
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
    

     <div className="homea" id='home'>
      <div className="box-1a" id='box-1'>
        <h1 className='Heading' id='Heading'>LET ME INTRODUCE <span className='span-heading'>MYSELF</span> </h1>
        <p className='paragraph'>Hi, my name is <span className="span-heading">Sohail Asif</span> and I'm from <span className="span-heading">Sohail Asif</span> .</p>
        <p className='paragraph'>I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2021.
</p>
        <p className='paragraph'>As a Full-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.</p>
        <p className='paragraph'>As a Full-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.</p>
        
        
      </div>
      <div className="img" id='img'>
      
      <img src='/pngegg.png' alt=''/>
      </div>

     </div>
     <FindMe/>
    
    </>
    
  );
};

export default Home;
