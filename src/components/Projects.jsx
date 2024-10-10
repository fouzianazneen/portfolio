



import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center" data-aos="flip-right" data-aos-duration="1000">
        {project.map((data) => (
          <div key={data.id} className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3">
            <div className="card">
              <div className="img-container">
                <img src={`/assests/${data.imageSrc}`} className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
