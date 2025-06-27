import React from 'react'
import jet1 from '../assets/Images/jet1.png'
import jet2 from '../assets/Images/jet2.png'
import jet3 from '../assets/Images/jet3.png'

const projectss = () => {
  return (
    <div>
      <div className='projects'>
        <h1 className='proj'>Our</h1>
        <h1 className='projj'>Projects</h1>
        <div>
          <div className='jet1'>
            <img src= {jet1}/>
            <div>
              <h3>Sample Project</h3><br/><br/>
              <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book.</p><br/><br/>
              <button>VIEW MORE</button>
            </div>
          </div><br/><br/>
          <div className='jet2'>
            <img src= {jet2}/>
            <div>
              <h3>Sample Project 2</h3><br/><br/>
              <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book.</p><br/><br/>
              <button>VIEW MORE</button>
            </div>
          </div><br/><br/>
          <div className='jet3 '>
            <img src= {jet3}/>
            <div>
              <h3>Sample Project 3</h3><br/><br/>
              <p>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book.</p><br/><br/>
              <button>VIEW MORE</button>
            </div>
          </div>
          
        </div>
      </div><br/><br/><br/>
    </div>
  )
}

export default projectss
