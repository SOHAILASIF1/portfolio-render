import React from 'react'
import './Project.css'
import Headings from '../../component/Headings/Headings'
import MyWork from '../../component/MyWork/MyWork'
const projects=[
  {
    img:"/Project1.png",
    tittle:"BookStore",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  },
  {
    img:"/Project1.png",
    tittle:"React",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  },
  {
    img:"/Project1.png",
    tittle:"JS",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  },
  {
    img:"/Project1.png",
    tittle:"ReactJS",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  },
  {
    img:"/Project1.png",
    tittle:"BookStore",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  },
  {
    img:"/Project1.png",
    tittle:"BookStore",
    disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis officia voluptatum doloribus laudantium necessitatibus. Iusto deleniti explicabo placeat ut quasi at! Eligendi placeat numquam expedita!a"
  }
]

function Project() {
  return (
    <div className='projects'>
        <Headings tittle="Project I" span="Made"/>
        <p></p>
        <div className="project-container">
          {projects.map((project,index)=>(
            <MyWork key={index} tittle={project.tittle} img={project.img} disc={project.disc}/>
          ))}



        </div>

    </div>
  )
}

export default Project