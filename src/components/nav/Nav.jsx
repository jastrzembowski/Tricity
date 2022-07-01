import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo1 from "../../images/logo1.png";
import "./nav.css";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWeb, setIsWeb] = useState(false);
  const [isCloud, setIsCloud] = useState(false);
  const [isQa, setIsQa] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isTechno, setIsTechno] = useState(false);
  return (
    <nav>
      <div className="nav-box" onClick={(e) => setIsTechno(false)}>
        <Link to="/">
          <img src={logo1} alt="logo" className="nav-logo"></img>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu nav-container">
          <li id="work">
            <a href="https://www.google.pl/" className="nav-links">
              Our Work
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>

          <li
            id="nav-cont"
            onMouseEnter={(e) => {
              setIsServices(true);
              setIsTechno(false);
            }}
          >
            <Link to="/services" className="nav-links">
              Services
            </Link>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div
            className={isServices ? "work-drop drop" : "work-hidden"}
            onMouseLeave={(e) => setIsServices(false)}
          >
            <div className="work-nav-title">
              <h3>Access the product development know-how you need</h3>
              <Link to="/services">Learn more</Link>
            </div>
            <div className="work-nav-container">
              <Link to="/softwarearchitecture">
                <div className="work-nav-box">
                  <h3>Software Architecture</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/softwaredevelopment">
                <div className="work-nav-box">
                  <h3>Software Development</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/webdevelopment">
                <div className="work-nav-box">
                  <h3>Web Development</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/mobiledevelopment">
                <div className="work-nav-box">
                  <h3>Mobile Development</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/uidesign">
                <div className="work-nav-box">
                  <h3>UI Design</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/cloudanddevops">
                <div className="work-nav-box">
                  <h3>Cloud and DevOps</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/qa">
                <div className="work-nav-box">
                  <h3>Quality Assurance</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/softwaresecurity">
                <div className="work-nav-box">
                  <h3>Software Security Audits</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/datascience">
                <div className="work-nav-box">
                  <h3>Data Science</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
              <Link to="/ai">
                <div className="work-nav-box">
                  <h3>AI</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    exercitationem officiis soluta esse. Molestias iusto
                    possimus.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <li
            id="nav-cont"
            onMouseEnter={(e) => {
              setIsTechno(true);
              setIsServices(false);
            }}
          >
            <Link to="/technologies" className="nav-links">
              Technologies
            </Link>

            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div
            className={isTechno ? "techno-drop drop" : "work-hidden"}
            onMouseLeave={(e) => setIsTechno(false)}
          >
            <ul className="small-drop">
              <li
                id="nav-cont"
                onMouseEnter={(e) => {
                  setIsDesktop(true);
                  setIsMobile(false);
                }}
              >
                <Link to="/sofrwaredevelopment" className="nav-links">
                  Desktop Development
                </Link>                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isDesktop ? "desktop-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsDesktop(false)}
              >
                <div className="desk-left">
                  <h1>Desktop Development</h1>
                  <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</h3>
                  <div id="readmore">
                    <Link to="/sofrwaredevelopment">Read more</Link>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <div className="desk-right">
                  <Link to="/net">
                    <div className="work-nav-box">
                      <h3>.Net</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/delphi">
                    <div className="work-nav-box">
                      <h3>Delphi</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                  <Link to="/java">
                    <div className="work-nav-box">
                      <h3>JavaFX / Java Swing</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/python">
                    <div className="work-nav-box">
                      <h3>Python</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                  <Link to="/c">
                    <div className="work-nav-box">
                      <h3>C / C++</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                </div>
              </div>
              <li
                id="nav-cont"
                onMouseEnter={(e) => {
                  setIsMobile(true);
                  setIsDesktop(false);
                  setIsCloud(false);
                  setIsWeb(false);
                  setIsQa(false);
                }}
              >
                <Link to="/mobiledevelopment" className="nav-links">
                  Mobile Development
                </Link>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isMobile ? "mobile-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsMobile(false)}
              >
                <div className="mobile-left">
                  <h1>Native</h1>
                  <Link to="/android" >
                    <div className="work-nav-box">
                      <h3>Android Java / Kotlin</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/swift">
                    <div className="work-nav-box">
                      <h3>Swift / Objective-C</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>


                </div>
                <div className="mobile-flex">
                  <h1>Crossplatform</h1>
                  <div className="mobile-right">
                    <Link to="/reactnative">
                      <div className="work-nav-box">
                        <h3>React Native</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div>
                    </Link>
                    <Link to="/xamarin">
                      <div className="work-nav-box">
                        <h3>Xamarin</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div>
                    </Link>
                    <Link to="/delphi">
                      <div className="work-nav-box">
                        <h3>Delphi</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div></Link>
                    <Link to="/flutter">
                      <div className="work-nav-box">
                        <h3>Flutter</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div>
                    </Link>
                    <Link to="/ionic">
                      <div className="work-nav-box">
                        <h3>Ionic</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div></Link>
                    <Link to="/phonegap">
                      <div className="work-nav-box">
                        <h3>PhoneGap</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. A exercitationem officiis soluta esse. Molestias
                          iusto possimus.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <li
                id="nav-cont"
                onMouseEnter={(e) => {
                  setIsMobile(false);
                  setIsDesktop(false);
                  setIsCloud(false);
                  setIsWeb(true);
                  setIsQa(false);
                }}
              >
                <Link to="/webdevelopment" className="nav-links">
                  Web Development
                </Link>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isWeb ? "web-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsWeb(false)}
              >
                <div className="web-left">
                  <h1>Web Development</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                  <div id="readmore">
                    <Link to="/webdevelopment">Read more</Link>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>{" "}
                </div>
                <div className="web-right">
                  <Link to="/react">
                    <div className="work-nav-box">
                      <h3>React</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/vue">
                    <div className="work-nav-box">
                      <h3>Vue</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/angular">
                    <div className="work-nav-box">
                      <h3>Angular</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                  <Link to="/nodejs">
                    <div className="work-nav-box">
                      <h3>NodeJS</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                  <Link to="/javaspring">
                    <div className="work-nav-box">
                      <h3>Java Spring</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                  <Link to="/wordpress">
                    <div className="work-nav-box">
                      <h3>Wordpress</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div></Link>
                  <Link to="/drupal">
                    <div className="work-nav-box">
                      <h3>Drupal</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        A exercitationem officiis soluta esse. Molestias iusto
                        possimus.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <li
                id="nav-cont"
                onMouseEnter={(e) => {
                  setIsMobile(false);
                  setIsDesktop(false);
                  setIsCloud(true);
                  setIsWeb(false);
                  setIsQa(false);
                }}
              >
                <Link to="/cloudanddevops" className="nav-links">
                  Cloud and Devops
                </Link>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isCloud ? "cloud-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsCloud(false)}
              >

                <div className="cloud-left">
                  <h1>Cloud and Devops</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <div id="readmore">
                    <Link to="/cloudanddevops">Read more</Link>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <div className="cloud-right">
                  <Link to="/aws"> 
                  <div className="work-nav-box">
                    <h3>AWS</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/gcp"> 
                  <div className="work-nav-box">
                    <h3>GCP</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  </Link>
                  <Link to ="/azure"> 
                  <div className="work-nav-box">
                    <h3>Azure</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  </Link>
                  <Link to ="/docker">
                  <div className="work-nav-box">
            
                    <h3>Docker</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/kubernetes"> 
                  <div className="work-nav-box">
                    <h3>Kubernetes</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  </Link>
                  <Link to="/serverless"> 
                  <div className="work-nav-box">
                    <h3>Serverless</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/microservices"> 
                  <div className="work-nav-box">
                    <h3>Microservices</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  </Link>
                </div>
              </div>
              <li
                id="nav-cont"
                onMouseEnter={(e) => {
                  setIsMobile(false);
                  setIsDesktop(false);
                  setIsCloud(false);
                  setIsWeb(false);
                  setIsQa(true);
                }}
              >
                <Link to="/qa" className="nav-links">
                  QA Automation
                </Link>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isQa ? "qa-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsQa(false)}
              >
                <div className="qa-left">
                  <h1>QA Automation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <div id="readmore">
                  <Link to="/qa" >Read more</Link>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>{" "}
                </div>
                <div className="qa-right">
                  <Link to="/selenium"> 
                  <div className="work-nav-box">
                    <h3>Selenium</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/appium"> 
                  <div className="work-nav-box">
                    <h3>Appium</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/cucumber"> 
                  <div className="work-nav-box">
                    <h3>Cucumber</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>

                  <Link to="/robot"> 
                  <div className="work-nav-box">
                    <h3>Robot Framework</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div></Link>
                  <Link to="/protractor"> 
                  <div className="work-nav-box">
                    <h3>Protractor</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <li id="nav-cont" className="small">
            <a href="/contact" className="nav-links">
              Contact us
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
        </ul>
        <div className="nav-contact big">
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}
