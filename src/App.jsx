import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Experience from './components/Experience'
import Skills from './components/Skills'

const App = () => {
  return (
  <>
  < Navbar />
  <div className="container">
    <Home />
    < Experience />
    <Skills />
    </div> 
  </>
  )
}


export default App;