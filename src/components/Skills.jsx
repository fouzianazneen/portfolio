import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills">
        {/* <div className="container skills"></div> */}
        <h1>SKILLS</h1>
         <div className="items">
        {skills.map((data) => (
          <>
            <div className="item" key={data.id}>
              {/* <div className="item"> */}
                <img src={`/assests/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            {/* </div> */}
          </>
        ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
