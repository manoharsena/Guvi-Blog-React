import React from "react";
import GuviLogo from "../assets/Guvi-blog-logo.png";
import navimg1 from "../assets/blog-header.png";

const Banner = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary topnav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={GuviLogo} alt="Bootstrap" width="120" height="50" />
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="navimg d-flex justify-content-center">
          <img src={navimg1} alt="Bootstrap" width="90%" height="30%" />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Banner;
