import React from "react";
import { Link } from "react-router-dom";

import logo2 from "../../images/logo2.png";
import foot from "../../images/foot.png";

import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-flexbox">
        <div className="footer-aside">
          <img src={logo2} alt="logo2"></img>
        </div>
        <div className="footer-text">
          <h3>Footer Title</h3>
          <Link to="/services" className="nav-links">
            Services
          </Link>
          <Link to="/softwarearchitecture" className="nav-links">
            Software Architecture
          </Link>
          <Link to="/softwaredevelopment" className="nav-links">
            Software Development
          </Link>
          <Link to="/webdevelopment" className="nav-links">
            Web Development
          </Link>
          <Link to="/mobiledevelopment" className="nav-links">
            Mobile Development
          </Link>
          <Link to="/uidesign" className="nav-links">
            UI Design
          </Link>
          <Link to="/cloudanddevops" className="nav-links">
            Cloud and DevOps
          </Link>
          <Link to="/qa" className="nav-links">
            Quality Assurance
          </Link>
          <Link to="/softwaresecurity" className="nav-links">
            Software Security Audits
          </Link>
          <Link to="/datascience" className="nav-links">
            Data Science
          </Link>
          <Link to="/ai" className="nav-links">
            AI
          </Link>
          <Link to="/technologies" className="nav-links">
          Technologies
          </Link>   
          <Link to="/contact" className="nav-links">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="foot-box">
          <h3>Address:</h3>
          <span>Lęborska 3B/2.30A, 80-386 Gdańsk</span>
        </div>
        <img src={foot} className="foot-img" alt="flags"></img>
      </div>
      <div className="foot-inf">
        <div className="foot-inf-box">
          <p> 2022 Tricity Solutions</p> <p>|</p>
          <p> All rights reserved</p>
        </div>
        <div className="foot-inf-box">
          <a href="https://www.google.com/">Privacy Policy</a>
          <p>|</p>
          <a href="https://www.google.com/">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}
