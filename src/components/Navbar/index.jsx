//import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <ul className="nav">
            <li className="headername">Alexander Merida Castillo</li>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;