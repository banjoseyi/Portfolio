import { NavHashLink } from 'react-router-hash-link';
import "./Navbar.css"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

export default function Navbar() {
  const [bugerOpen, setBugerOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setBugerOpen(false);
  };

  // Close menu when clicking outside (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && bugerOpen) {
        setBugerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bugerOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (bugerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [bugerOpen]);

  return (
    <motion.div className="navbar"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
    >
      <nav>
        <NavHashLink to='/' className='logo' onClick={handleLinkClick}>
          Oluwaseyifunmi
        </NavHashLink>

        <div
          className={`hamBuger ${bugerOpen ? "open" : ""}`}
          onClick={() => setBugerOpen(!bugerOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={bugerOpen ? "open" : ""}>
          <li>
            <NavHashLink to="/#about" smooth onClick={handleLinkClick}>
              ABOUT
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#portfolio" smooth onClick={handleLinkClick}>
              PORTFOLIO
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact" smooth onClick={handleLinkClick}>
              CONTACT
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}