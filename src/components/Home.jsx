




import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import image from "./data/image.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "Myself Fouzia Nazneen",
        "I'm Full Stack Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div
          className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div
          className="right"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="img">
            {/* Corrected the path to /assets/ */}
            <img src={`/assets/${image.imgSrc}`} alt="profile image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
