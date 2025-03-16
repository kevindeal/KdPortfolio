// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AboutMe } from './components/aboutMe/aboutMe'
import {Hero} from './components/hero/hero'
import { ThreeCol } from './components/projectsGrid/threeCol'
import { Footer } from './components/footer'

// import { TabChart } from './components/tabChart/tabChart'

function App() {

  return (
    <>
      <div>
        <div className=""></div>
        <Hero/>
        <ThreeCol/>
        <AboutMe/>
        <Footer/>
      </div> 
    </>
  )
}

export default App
