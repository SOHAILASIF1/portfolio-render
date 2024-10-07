import React from 'react';

import Headings from '../../component/Headings/Headings';
import './About.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import Skillset from '../../component/Skillset/Skillset';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const skills=[
  <FaHtml5/>
  

  ,<FaCss3/>,<FaJsSquare/>,<FaReact/>,<FaNode/>,<SiExpress/>,<SiMongodb/>,<FaHtml5/>,<FaCss3/>,<FaJsSquare/>,<FaReact/>,<FaNode/>,<SiExpress/>,<SiMongodb/>
]
const Tools=[
  "VS CODE" , "GitHub" , "Sohail","VS CODE" , "GitHub" , "Sohail","VS CODE" , "GitHub" , "Sohail"
]

function About() {
  return (
    <>
    <div className="about">
      <Headings tittle="Professional" span="SkillSet"/>

    <div className="container-about">
      {skills.map((skill,index)=>(
        <Skillset key={index} icon={skill}/>

      ))}
    </div>
    <Headings tittle='Tool I ' span="Use"/>
    <div className="container-about">
      {Tools.map((tool,index)=>(
        <Skillset key={index} icon={tool}/>

      ))}
    </div>
    </div>
    </>
  );
}

export default About;
