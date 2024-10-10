


import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items" data-aos="flip-left" data-aos-duration="1000">
        {skills.map((data) => (
          <div key={data.id} className="item"> {/* key prop moved here */}
            <img src={`/assests/${data.imageSrc}`} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
