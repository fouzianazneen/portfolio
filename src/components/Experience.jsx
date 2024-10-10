







import React from 'react';
import experience from './data/experience.json';

const Experience = () => {
  return (
    <div className="container ex" id='experience'>
      <h1>EXPERIENCE</h1>
      {experience.map((data) => (
        <div 
          key={data.id} // Move key here
          className='ex-items text-center my-5' 
          data-aos="zoom-in"
          data-aos-duration="1000" 
        >
          <div className='left'>
            <img src={`/assests/${data.imgSrc}`} alt='' />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate}{" - "}{data.endDate}
              </span>
            </h4>
            {data.experiences.map((exp, index) => (
              <h5 key={index} style={{ color: "yellow" }}>{exp}</h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
