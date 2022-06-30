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
            <a href="https://www.google.com/" className="nav-links">
              Services
            </a>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div
            className={isServices ? "work-drop drop" : "work-hidden"}
            onMouseLeave={(e) => setIsServices(false)}
          >
            <div className="work-nav-title">
              <h3>Access the product development know-how you need</h3>
              <a href="https://www.google.com/">Learn more</a>
            </div>
            <div className="work-nav-container">
              <div className="work-nav-box">
                <h3>Software Architecture</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>
              <div className="work-nav-box">
                <h3>Software Development</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>Mobile Development</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>UI Design</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>Cloud and DevOps</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>Quality Assurance</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>{" "}
              <div className="work-nav-box">
                <h3>Software Security Audits</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>
              <div className="work-nav-box">
                <h3>Data Sience</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>
              <div className="work-nav-box">
                <h3>AI</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  exercitationem officiis soluta esse. Molestias iusto possimus.
                </p>
              </div>
            </div>
          </div>
          <li
            id="nav-cont"
            onMouseEnter={(e) => {
              setIsTechno(true);
              setIsServices(false);
              
            }}
          >
            <a href="/" className="nav-links">
              Technologies
            </a>

            <i class="fa-solid fa-angle-right"></i>
          </li>
          <div
            className={isTechno? "techno-drop drop" : "work-hidden"}
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
                <a href="/" className="nav-links">Desktop Development</a>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isDesktop ? "desktop-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsDesktop(false)}
              >
                <div className="desk-left">
                  <h1>Desktop Development</h1>
                  <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</h3>
                  <div id="readmore">
                    <a href="https://www.google.com/">Read more</a>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <div className="desk-right">
                  <div className="work-nav-box">
                    <h3>.Net</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Delphi</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>JavaFX / Java Swing</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Python</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>C / C++</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
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
                <a  href="/" className="nav-links">Mobile Development</a>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <div
                className={isMobile ? "mobile-drop drop" : "work-hidden"}
                onMouseLeave={(e) => setIsMobile(false)}
              >
                <div className="mobile-left">
                  <h1>Native</h1>
                  <div className="work-nav-box">
                    <h3>Android Java / Kotlin</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Swift / Objective-C</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                </div>
                <div className="mobile-flex">
                  <h1>Crossplatform</h1>
                  <div className="mobile-right">
                    <div className="work-nav-box">
                      <h3>React Native</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
                    <div className="work-nav-box">
                      <h3>Xamarin</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
                    <div className="work-nav-box">
                      <h3>Delphi</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
                    <div className="work-nav-box">
                      <h3>Flutter</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
                    <div className="work-nav-box">
                      <h3>Ionic</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
                    <div className="work-nav-box">
                      <h3>PhoneGap</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. A exercitationem officiis soluta esse. Molestias
                        iusto possimus.
                      </p>
                    </div>
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
                <a href="/" className="nav-links">Web Development</a>
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
                    <a href="https://www.google.com/">Read more</a>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>{" "}
                </div>
                <div className="web-right">
                  <div className="work-nav-box">
                    <h3>React</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Vue</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Angular</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>NodeJS</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Java Spring</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Wordpress</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Drupal</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
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
                <a href="/" className="nav-links">Cloud and Devops</a>
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
                    <a href="https://www.google.com/">Read more</a>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <div className="cloud-right">
                  <div className="work-nav-box">
                    <h3>AWS</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>GCP</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Azure</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Docker</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Kubernetes</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Serverless</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Microservices</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
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
                <a href="/" className="nav-links">QA Automation</a>
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
                    <a href="https://www.google.com/">Read more</a>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>{" "}
                </div>
                <div className="qa-right">
                  <div className="work-nav-box">
                    <h3>Selenium</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Appium</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Cucumber</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Robot Framework</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
                  <div className="work-nav-box">
                    <h3>Protractor</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      A exercitationem officiis soluta esse. Molestias iusto
                      possimus.
                    </p>
                  </div>
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
