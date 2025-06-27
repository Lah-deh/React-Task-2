import React from 'react'
import Heroo from '../assets/Images/hero.png'

const Hero = () => {
  return (
    <>
    <div className='hero'>
      <div className='' >
        <h1 >PROJECT</h1>
        <h2>Lorum</h2>
      </div>
        <img src={Heroo} alt="hero" className='hero' />
    </div>
      
    </>
  )
}

export default Hero