import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo.png'

const nav = () => {
  return (
    <>
       <div className='nav'>
          <section className=" nav-flex">
            <img src={Logo} alt="logo" className='logo' />
            <ul className='links'>
              <li><Link to='./' className='link'>Main</Link></li>
              <li><Link to="/gallery" className='link'>Gallery</Link></li>
              <li><Link to='./projects' className='link'>Projects</Link></li>
              <li><Link to='./' className='linkk link'>Certification</Link></li>
              <li><Link to='./' className='linkk link'>Contacts</Link></li>
            </ul>
          </section>
        </div>
        
    </>
  )
}

export default nav