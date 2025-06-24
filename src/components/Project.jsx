import React from 'react'
import '../App.css'
import p1 from '../assets/Images/Group 79.png'
import p2 from '../assets/Images/p2.png'
import p3 from '../assets/Images/p3.png'
import p4 from '../assets/Images/p4.png'
import p5 from '../assets/Images/p5.png'

const Project = () => {
  return (
    <>
      <div className='project'>
        <h1 >Our Projects</h1>
        <div className=' gridd'>
          <img src={p1} className='ima1'/>
          <img src={p2} className='ima2'/>
          <img src={p3} className='ima3'/>
          <img src={p4} className='ima4'/>
          <img src={p5} className='ima5'/>
        </div>
        <div className=''>
          <button>ALL PROJECTS</button>
        </div>
      </div>
    </>
  )
}

export default Project