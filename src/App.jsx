import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}

export default App
