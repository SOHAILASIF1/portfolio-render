import React from 'react'
import './Project.css'
import Headings from '../../component/Headings/Headings'
import MyWork from '../../component/MyWork/MyWork'

function Project() {
  return (
    <div className='projects'>
        <Headings tittle="Project I" span="Made"/>
        <div className="project-container">
          <MyWork/>
          <MyWork/>
          <MyWork/>
          <MyWork/>
          <MyWork/>



        </div>

    </div>
  )
}

export default Project