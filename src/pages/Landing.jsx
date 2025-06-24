import React from 'react'
import Hero from '../components/hero.jsx'
import About from '../components/About.jsx'
import Focus from '../components/Focus.jsx'
import Project from '../components/Project.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'


const Landing = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Focus/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Landing