import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="menu">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item mx-4">
          <Link to="/" className="nav-link" href="#">
            ALL
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link to="/fullstack" className="nav-link" href="#">
            FULL STACK DEVELOPMENT
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link to="/datascience" className="nav-link" href="#">
            DATA SCIENCE
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link to="cybersecurity" className="nav-link" href="#">
            CYBER SECURITY
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link to="career" className="nav-link" href="#">
            CAREER
          </Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;