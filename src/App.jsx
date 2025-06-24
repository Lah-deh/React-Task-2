import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing.jsx'
import Gallery from './pages/Gallery.jsx'
import Projects from './pages/Projects.jsx'
import Nav from './components/nav.jsx'



function App() {
  

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/projects" element = {<Projects/>}/>
        </Routes>
        
     </Router>
     
    

    </>
  )
}

export default App
