import React from 'react'
import onee from '../assets/Images/onee.png'
import twoo from '../assets/Images/twoo.png'

const Focus = () => {
  return (
    <>
      <section className='focus '>
        <h1 >Main Focus/Mission Statement</h1>
        <div className='focuss'>
          <div className='onee'>
            <img src={onee}/>
            <p  className = 'pp'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et <br/>facilisis placerat.</p>
          </div>
          <div className='twoo'>
            <img src= {twoo}/>
            <p className = 'pp'>Lorem ipsum dolor sit amet, consectetur <br/>  adipiscing elit. Sed efficitur, lectus et <br/>  facilisis placerat, magna mauris porttitor <br/>  tortor, a auctor est felis ut nisl.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Focus