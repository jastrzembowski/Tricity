import React from "react";

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
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
          <a href="#">Lorem, ipsum.</a>
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
          <p> 2022 Tricity Solutions</p> <p>|</p><p> All rights reserved</p>
        </div>
        <div className="foot-inf-box">
          <a href="#"> Privacy Policy</a><p>|</p><a href="#">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}
