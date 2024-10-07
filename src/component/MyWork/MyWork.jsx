import React from 'react'
import './MyWork.css'

function MyWork({img,tittle,disc}) {
  return (
    <div className='mywork'>
        <img src={img} alt=''/>
        <h4>{tittle}</h4>
        <p>{disc}</p>
        <a href=''>Github</a>



    </div>
  )
}

export default MyWork