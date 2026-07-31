import React from 'react'
import Student from './components/Student'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'
import Headers from './components/Header'

const App = () => {
  return (
    <div style={{ display: "grid", gap: "20px",margin: "20px",padding: "20px",border: "2px solid black" }}>
      <Headers/>
      <br />
      <Maincontent />
      <br />
      <Footer />
      
      
      
    </div>
  )
}

export default App