import React from "react";
import { Link } from "react-router-dom";
import img5 from "../../images/img5.jpg";
import img2 from "../../images/img2.jpg";
import png from "../../images/png.png";
import png2 from "../../images/png2.png";
import png3 from "../../images/png3.png";

import Footer from "../footer/Footer";

function MobileDev() {
  return (
    <>
      <div className="container">
        <header className="mobile head">
          <h1>Best mobile apps</h1>
          <h3>Designed to please your customer</h3>
          <div className="serv-contact_button">
            <Link to="/contact">Contact us</Link>
          </div>
        </header>
        <article className="mobile-top">
          <article className="mobile-top-text-holder">
            <h3>
              Grow Your Enterprise with the Right Mobile Solutions Partner
            </h3>
            <p>
              Successful mobile application development rationally combines
              three aspects: a market, user, and the product itself. These three
              factors should work together in harmony to deliver unique value,
              great usability, and excellent performance to users. With the
              right tools, partner, and methodologies, you can ensure your
              mobile product is robust and well-fitted to your target market’s
              needs. Whether the application is consumer or business-oriented,
              Tricity Solutions mobile and cross-industry expertise enables us
              to collaborate with you to develop cutting-edge, secure, and
              scalable mobile apps that work across all popular platforms.
              Tricity solution uses a combination of best practices and a
              customized mix of technologies to optimize development and provide
              a unique user experience.
            </p>
          </article>
          <aside className="mobile-top-img-holder">
            <img src={img2} alt="img"></img>
          </aside>
        </article>
        <article className="mobile-mid">
          <aside className="mobile-top-img-holder">
            <img src={img5} alt="img"></img>
          </aside>
          <article className="mobile-top-text-holder">
            <h3>
              Grow Your Enterprise with the Right Mobile Solutions Partner
            </h3>
            <p>
              Successful mobile application development rationally combines
              three aspects: a market, user, and the product itself. These three
              factors should work together in harmony to deliver unique value,
              great usability, and excellent performance to users. With the
              right tools, partner, and methodologies, you can ensure your
              mobile product is robust and well-fitted to your target market’s
              needs. Whether the application is consumer or business-oriented,
              Tricity Solutions mobile and cross-industry expertise enables us
              to collaborate with you to develop cutting-edge, secure, and
              scalable mobile apps that work across all popular platforms.
              Tricity solution uses a combination of best practices and a
              customized mix of technologies to optimize development and provide
              a unique user experience.
            </p>
          </article>
        </article>
        <article className="mobile-icons-container">
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="icons-container">
            {" "}
            <div className="icon-box">
              <i class="fa-solid fa-mobile"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                sint!
              </p>
            </div>
            <div className="icon-box">
              <i class="fa-solid fa-globe"></i>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                sint!
              </p>
            </div>
            <div className="icon-box">
              <i class="fa-solid fa-gauge-simple-high"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                sint!
              </p>
            </div>
          </div>
        </article>
        <article className="mobile-contact">
          <h1>Ready to get started?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus pariatur dolore illum ratione ipsum!
          </p>
          <div className="serv-contact_button mob-con">
            <Link to="/contact">Contact us</Link>
          </div>
        </article>
        <article className="mobile-readmore">
          <h1>Read more about technologies we use</h1>
          <div className="technologies-box">
            <div className="techno-holder">
              <img src={png} alt="img"></img>
              <p>Angular</p>
            </div>{" "}
            <div className="techno-holder">
              <img src={png2} alt="img"></img>
              <p>React</p>
            </div>{" "}
            <div className="techno-holder">
              <img src={png3} alt="img"></img>
              <p>Vue</p>
            </div>
          </div>
        </article>
      </div>

      <Footer></Footer>
    </>
  );
}

export default MobileDev;
