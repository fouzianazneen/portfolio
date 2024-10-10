



import React from 'react';
import pdf from '../pdf/resume.pdf';
import image from './data/image.json';

const Home = () => {
  return (
    <>
      <div className='container home'>
        <div className="left">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae assumenda</h1>

          {/* Correctly reference the pdf variable without single quotes */}
          <a href={pdf} download="resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assests/${image.imgSrc}`} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
