




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