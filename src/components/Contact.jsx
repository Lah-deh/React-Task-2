import React from 'react'
import '../App.css'
import man from '../assets/Images/man.png'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className=''>Contact Us</h1>
      <div className='contactt'>
        <div>
          <form>
            <input type="text" placeholder='Name' className='bg-gray-300 border-gray-300 pl-5'/>
            <input type="number" placeholder='Phone Number' className='bg-gray-300 border-gray-300 pl-5'/>
            <input type="email" placeholder='E-mail' className='bg-gray-300 border-gray-300 pl-5'/>
            <input type="text" placeholder='Interested in' className='bg-gray-300 border-gray-300 pl-5'/>
            <input type="text" placeholder='Message' className='bg-gray-300 border-gray-300 pl-5  ' id='message'/>

          </form>
        </div>
        <div className='man'>
          <img src= {man}/>
        </div>
      </div>
      <button>SEND EMAIL</button>
    </div>
  )
}

export default Contact