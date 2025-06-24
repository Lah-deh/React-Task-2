import React from 'react'
import p1 from '../assets/Images/p11.png'
import p2 from '../assets/Images/p22.png'
import p3 from '../assets/Images/p33.png'
import p4 from '../assets/Images/p44.png'
import p5 from '../assets/Images/p55.png'
import p6 from '../assets/Images/p6.png'
import p7 from '../assets/Images/p7.png'
import p8 from '../assets/Images/p8.png'
import p9 from '../assets/Images/p9.png'
import p10 from '../assets/Images/p10.png'

const Gallerys = () => {
  return (
    <div>
      <div className='photo'>
        <div>
          <h1 className='pho'>Photo</h1>
          <h1 className='phoo'>Gallery</h1>
        </div>
        <div className='photoo'>
          <img src= {p1}/>
          <img src= {p2}/>
          <img src= {p3}/>
          <img src= {p4}/>
          <img src= {p5}/>
          <img src= {p6}/>
          <img src= {p7}/>
          <img src= {p8}/>
          <img src= {p9}/>
          <img src= {p10}/>
        </div>
        
      </div>
    </div>
  )
}

export default Gallerys
