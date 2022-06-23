import React, {useState} from "react";
import { Link } from "react-router-dom";

import logo1 from "../../images/logo1.png";
import "./nav.css";

export default function Nav() {

  const [isWork, setIsWork] = useState(false)
  const [isServices, setIsServices] = useState(false)
  const [isTechno, setIsTechno] = useState(false)
  return (
    <nav>
      <div className="nav-box">
        <Link to="/">
          <img src={logo1} alt="logo" className="nav-logo"></img>
        </Link>
        <ul className="nav-container">
          <li id="nav-cont" onMouseEnter={(e) => {setIsWork(true);setIsServices(false);setIsTechno(false)}}>
            <a href="#" className="nav-links">
              Our Work
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div className={isWork? "work-drop" : "work-hidden"} onMouseLeave={(e)=> setIsWork(false)}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae quisquam quibusdam inventore explicabo mollitia, accusamus cupiditate placeat harum omnis.

          </div>
          <li id="nav-cont" onMouseEnter={(e) => {setIsServices(true);setIsTechno(false);setIsWork(false)}}>
            <a href="#" className="nav-links">
              Services
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div className={isServices? "work-drop" : "work-hidden"} onMouseLeave={(e)=> setIsServices(false)}>
    SERVISEELorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae quisquam quibusdam inventore explicabo mollitia, accusamus cupiditate placeat harum omnis.

          </div>
          <li id="nav-cont" onMouseEnter={(e) => {setIsServices(false);setIsTechno(true);setIsWork(false)}}>
            <a href="#" className="nav-links">
              Technologies
            </a>

            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div className={isTechno? "work-drop" : "work-hidden"} onMouseLeave={(e)=> setIsTechno(false)}>
          TECHNOOLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae quisquam quibusdam inventore explicabo mollitia, accusamus cupiditate placeat harum omnis.

</div>

          {/* <li id="nav-cont">
            <a href="#" className="nav-links">
              Industries
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li id="nav-cont">
            <a href="#" className="nav-links">
              Company
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li id="nav-cont">
            <a href="#" className="nav-links">
              Blog
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li> */}
        </ul>
        <div className="nav-contact">
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}
