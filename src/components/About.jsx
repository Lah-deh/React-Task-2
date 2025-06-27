import React from 'react'
import one from '../assets/Images/1.png'
import two from '../assets/Images/2.png'
import three from '../assets/Images/3.png'


const About = () => {
  return (
    <> 
      <div className='about' >
        <div className='ima'>
          <img src={one} className='one'/><br/>
          <img src={two} className='two'/>
        </div><br/>
        <div>
          <img src={three} className='three'/>
        </div>
        <div>
          <h1 className=''>About</h1><br/>
          <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book. It has<br/> survived not only five centuries, but also the leap into<br/> electronic typesetting, remaining essentially unchanged.</p>
          <button className='butt '>READ MORE</button>
        </div>
      </div>
    </>
  )
}

export default About