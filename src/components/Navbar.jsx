import React from "react";
import { Link } from "react-router-dom";
// Import navbas.css whenever styling gets done

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">SEMChronicles</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/reflections">Reflections</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
