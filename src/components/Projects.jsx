// // // // // import React from "react";
// // // // // import project from "./data/projects.json";

// // // // // const Projects = () => {
// // // // //   return (
// // // // //     <>
// // // // //       <div className="container projects my-3" id="projects" >
// // // // //         <h1>PROJECTS</h1>
// // // // //         <div className="row d-flex justify-content-center align-content-center"
// // // // //          data-aos="flip-right"
// // // // //          data-aos-duration="1000" >
// // // // //           {project.map((data) => (
// // // // //             <>
// // // // //               <div
// // // // //                 key={data.id}
// // // // //                 className="my-4 col-sm-6 col-md-4 col-lg-3 mx-3"
// // // // //               >
// // // // //                 <div
// // // // //                   className="card bg-black text-light"
// // // // //                   style={{ width: "18rem", border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)" }}
                
// // // // //                 >
// // // // //                   <div className="img d-flex justify-content-center align-content-center p-3"
// // // // //                   >
// // // // //                       {/* <img src={`/assests/${data.imageSrc}`} alt="" /> */}
// // // // //                   <img src={`/assests/${data.imageSrc}`} className="card-img-top" alt="..."  style={{
// // // // //                     width: '250px',
// // // // //                     height: '200px',
// // // // //                     border: '2px solid yellow',
// // // // //                     borderRadius: '10px'

// // // // //                   }}/>
// // // // //                   </div>
// // // // //                   <div className="card-body text-center">
// // // // //                     <h5 className="card-title">{data.title}</h5>
// // // // //                     <p className="card-text">{data.description}</p>
// // // // //                     <a href={data.demo} className="btn btn-primary">
// // // // //                       Demo
// // // // //                     </a>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Projects;









// // // // import React from "react";
// // // // import project from "./data/projects.json";

// // // // const Projects = () => {
// // // //   return (
// // // //     <>
// // // //       <div className="container projects my-3" id="projects">
// // // //         <h1>PROJECTS</h1>
// // // //         <div className="row d-flex justify-content-center align-content-center"
// // // //          data-aos="flip-right"
// // // //          data-aos-duration="1000" >
// // // //           {project.map((data) => (
// // // //             <div
// // // //               key={data.id}
// // // //               className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3"
// // // //             >
// // // //               <div
// // // //                 className="card bg-black text-light"
// // // //                 style={{ width: "100%", border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)" }}
// // // //               >
// // // //                 <div className="img d-flex justify-content-center align-content-center p-3">
// // // //                   <img src={`/assests/${data.imageSrc}`} className="card-img-top" alt="..." style={{
// // // //                     maxWidth: '100%', // Make the image responsive
// // // //                     height: 'auto', // Maintain aspect ratio
// // // //                     border: '2px solid yellow',
// // // //                     borderRadius: '10px'
// // // //                   }}/>
// // // //                 </div>
// // // //                 <div className="card-body text-center">
// // // //                   <h5 className="card-title">{data.title}</h5>
// // // //                   <p className="card-text">{data.description}</p>
// // // //                   <a href={data.demo} className="btn btn-primary">
// // // //                     Demo
// // // //                   </a>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Projects;













// // // import React from "react";
// // // import project from "./data/projects.json";

// // // const Projects = () => {
// // //   return (
// // //     <>
// // //       <div className="container projects my-3" id="projects">
// // //         <h1>PROJECTS</h1>
// // //         <div className="row d-flex justify-content-center align-content-center"
// // //          data-aos="flip-right"
// // //          data-aos-duration="1000" >
// // //           {project.map((data) => (
// // //             <div
// // //               key={data.id}
// // //               className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3"
// // //             >


// // //               <div
// // //                 className="card bg-black text-light"
// // //                 style={{
// // //                   width: "100%",
// // //                   objectFit: "cover",
// // //                   border: "1px solid yellow",
// // //                   borderRadius: "10px",
// // //                   // boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
// // //                   height: '400px', // Set a fixed height for uniformity
// // //                 }}
// // //               >
// // //                 <div className="img d-flex justify-content-center align-content-center p-3">
// // //                   <img 
// // //                     src={`/assests/${data.imageSrc}`} 
// // //                     className="card-img-top" 
// // //                     alt="..." 
// // //                     style={{
// // //                       width: '100%', // Make the image responsive
// // //                       height: '200px', // Fixed height for uniformity
// // //                       objectFit: 'cover', // Cover to maintain aspect ratio
// // //                       border: '2px solid yellow',
// // //                       borderRadius: '10px',
// // //                     }}
// // //                   />
// // //                 </div>
// // //                 <div className="card-body text-center">
// // //                   <h5 className="card-title">{data.title}</h5>
// // //                   <p className="card-text">{data.description}</p>
// // //                   <a href={data.demo} className="btn btn-primary">
// // //                     Demo
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Projects;














// // import React from "react";
// // import project from "./data/projects.json";

// // const Projects = () => {
// //   return (
// //     <>
// //       <div className="container projects my-3" id="projects">
// //         <h1>PROJECTS</h1>
// //         <div
// //           className="row d-flex justify-content-center align-content-center"
// //           data-aos="flip-right"
// //           data-aos-duration="1000"
// //         >
// //           {project.map((data) => (
// //             <div
// //               key={data.id}
// //               className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3"
// //             >
// //               <div
// //                 className="card bg-black text-light"
// //                 style={{
// //                   width: "100%",
// //                   border: "1px solid yellow",
// //                   boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
// //                   height: "400px", // Set a fixed height for uniformity
// //                 }}
// //               >
// //                 <div className="img d-flex justify-content-center align-content-center p-3">
// //                   <img
// //                     src={`/assests/${data.imageSrc}`}
// //                     className="card-img-top"
// //                     alt="..."
// //                     style={{
// //                       width: "100%", // Make the image responsive
// //                       height: "200px", // Fixed height for uniformity
// //                       objectFit: "cover", // Ensure the image covers the area
// //                       border: "2px solid yellow",
// //                       borderRadius: "10px",
// //                     }}
// //                   />
// //                 </div>
// //                 <div className="card-body text-center" style={{ flexGrow: 1 }}>
// //                   <h5 className="card-title">{data.title}</h5>
// //                   <p className="card-text">{data.description}</p>
// //                   <a href={data.demo} className="btn btn-primary">
// //                     Demo
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Projects;










// import React from "react";
// import project from "./data/projects.json";
// // import "./Projects.css"; // Import the CSS file

// const Projects = () => {
//   return (
//     <>
//       <div className="container projects my-3" id="projects">
//         <h1>PROJECTS</h1>
//         <div
//           className="row d-flex justify-content-center"
//           data-aos="flip-right"
//           data-aos-duration="1000"
//         >
//           {project.map((data) => (
//             <div
//               key={data.id}
//               className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3"
//             >
//               <div className="card">
//                 <div className="img-container">
//                   <img
//                     src={`/assests/${data.imageSrc}`}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                 </div>
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{data.title}</h5>
//                   <p className="card-text">{data.description}</p>
//                   <a href={data.demo} className="btn btn-primary">
//                     Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;








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
