// // // import React from 'react'

// // // const Navbar = () => {
// // //   return (
// // //     <>
// // //     <div className='container nav_bar'
// // //     data-aos="fade-down"
// // //     data-aos-duration="1000" 
// // //     >
// // //         <div className='left nav_items'>portfolio</div>
// // //       <div className='right'>
// // //         <a href='#home' className='nav_items'>Home</a>
// // //         <a href='#experience' className='nav_items'>Experience</a>
// // //         <a href='#skills' className='nav_items'>Skills</a>
// // //         <a href='#projects' className='nav_items'>Projects</a>
// // //         <a href='#contact' className='nav_items'>Contact</a>
// // //       </div>
        
        
// // //     </div>
// // //     </>
// // //   )
// // // }

// // // export default Navbar









// // import React, { useEffect, useState } from 'react';

// // const Navbar = () => {
// //   const [isVisible, setIsVisible] = useState(true);
  
// //   const handleScroll = () => {
// //     const currentScrollPos = window.pageYOffset;
// //     setIsVisible(currentScrollPos < 80 || currentScrollPos < lastScrollPos);
// //     lastScrollPos = currentScrollPos;
// //   };

// //   useEffect(() => {
// //     let lastScrollPos = window.pageYOffset;
// //     window.addEventListener('scroll', handleScroll);
    
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className={`nav_bar ${isVisible ? 'visible' : 'hidden'}`}
// //       data-aos="fade-down"
// //       data-aos-duration="1000">
// //       <div className='left nav_items'>portfolio</div>
// //       <div className='right'>
// //         <a href='#home' className='nav_items'>Home</a>
// //         <a href='#experience' className='nav_items'>Experience</a>
// //         <a href='#skills' className='nav_items'>Skills</a>
// //         <a href='#projects' className='nav_items'>Projects</a>
// //         <a href='#contact' className='nav_items'>Contact</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;











// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
//       <div className="navbar-container">
//         <div className="navbar-logo">portfolio</div>
//         <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
//           <a href="#home" className="nav-item">Home</a>
//           <a href="#experience" className="nav-item">Experience</a>
//           <a href="#skills" className="nav-item">Skills</a>
//           <a href="#projects" className="nav-item">Projects</a>
//           <a href="#contact" className="nav-item">Contact</a>
//         </div>
//         <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // New state for scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // New state for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // New effect for handling scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    // Updated className for visibility
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        {/* Left side - portfolio text */}
        <div className="navbar-logo">portfolio</div>
        
        {/* Right side - menu items */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-item">Home</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
        
        {/* New mobile menu toggle button */}
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;