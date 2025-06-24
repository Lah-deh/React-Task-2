import React from 'react'
import Logo from '../assets/Images/logg.png'
import Location from '../assets/Images/location.png'
import Call from '../assets/Images/call.png'
import Mail from '../assets/Images/mail.png'
import FB from '../assets/Images/fb.png'
import X from '../assets/Images/x.png'
import Pin from '../assets/Images/pin.png'
import In from '../assets/Images/in.png'

import '../App.css'
const Footer = () => {
  return (
    <div className='footer'>
       <div className=' footerr'>
         <img src={Logo} className='logoo'/>
          <div className='foot'>
            <ul>
              <li>Information</li><br/>
              <li>Main</li><br/>
              <li>Gallery</li><br/>
              <li>Projects</li><br/>
              <li>Certifications</li><br/>
              <li>contacts</li><br/>
            </ul>
          </div>
          <div>
            <ul>
              <li>Contacts</li><br/>
              <li><img src={Location}/>1234 Sample Street<br/> Austin Texas 78704</li><br/>
              <li><img src={Call}/>512.333.2222 </li><br/>
              <li><img src={Mail}/>sampleemail@gmail.com</li>
            </ul>
          </div>
          <div className='sooo'>
            <ul>
              <li>Social Media</li><br/>
              <li className='flexxx'><img src={FB}/><img src={X}/><img src={In}/><img src={Pin}/></li>
            </ul>
          </div>
       </div>
       <hr className='text-gray-300'/>
       <p className='copy'>&copy;2021 All Rights Reserved</p>
    </div>
  )
}

export default Footer