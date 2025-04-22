import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  // useState to manage whether the dropdown menu is open or not
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">SEMChronicles</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Dropdown menu for Courses section */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-title">Courses</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                {" "}
                <Link to="/courses/year1">Year 1</Link>
              </li>
              <li>
                {" "}
                <Link to="/courses/year2">Year 2</Link>
              </li>
              <li>
                {" "}
                <Link to="/courses/year3">Year 3</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
