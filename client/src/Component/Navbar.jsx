import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link" style={{textDecoration: "none" }}>DreamNest</Link>
      </div>
      <ul className="nav-links">
        <li><a href="#properties">Properties</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#agents">Agents</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
