import React from 'react'
import pdf from '../pdf/fouzia.pdf'

const Home = () => {
  return (
    
    <>
      <div className='container home'>
        <div className="left">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae assumenda? Iure numquam iste eius quide</h1>

          <a href='{pdf}' download="resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
        </div>
        <div className="right">
          <div className="img">
          <img src="" alt="" />
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Home
