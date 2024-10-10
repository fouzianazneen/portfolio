import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
  <>
  < Navbar />
  <div className="container">
    <Home />
    < Experience />
    <Skills />
    <Projects />
    </div> 
  </>
  )
}


export default App;