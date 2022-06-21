import React from "react";
import { Link } from "react-router-dom";

import logo1 from "../../images/logo1.png";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-box">
        <Link to="/">
          <img src={logo1} alt="logo" className="nav-logo"></img>
        </Link>
        <ul className="nav-container">
          <li>
            <a href="#" className="nav-links">
              Our Work
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Industries
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Company
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Blog
            </a>
          </li>
        </ul>
        <div className="nav-contact">
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}
