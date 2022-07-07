import React from "react";
import Slider from "react-slick";
import Faq from "./Faq";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import "./main.css";

import img3 from "../../images/img3.jpg";
import img9 from "../../images/img9.jpg";
import img4 from "../../images/img4.jpg";
import sli1 from "../../images/sli1.jpg";
import sli2 from "../../images/sli2.jpg";
import sli3 from "../../images/sli3.jpg";
import sli4 from "../../images/sli4.jpg";
import sli5 from "../../images/sli5.jpg";
import helpngo from "../../images/customer-img/helpngo.png";
import menta from "../../images/customer-img/menta.png";
import power from "../../images/customer-img/power.png";
import qche from "../../images/customer-img/qche.png";
import real from "../../images/customer-img/real.png";
import wetog from "../../images/customer-img/wetog.jpg";
import arrow from "../../images/arrow.svg";

export default function main() {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const opSettings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 8000,
    infinite: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="main-container">
        <div className="main-box">
          <div className="main-text">
            <h1>
              Is it possible to create a skiled team of developers in a few
              days?
            </h1>
            <p>
              Find out how we can help you become a market leader with the
              latest technologies. We will guide you through the entire process
              of your project - from idea and technology selection, to design
              and final result. <br />
              <br />
              Do you have an idea for an "app" but don't know how to implement
              it?
            </p>
            <div className="main-book-button">
              <Link to="/contact">Book free consultation</Link>
            </div>
          </div>
          <div className="main-img">
            <img src={img4} alt="main-img" className="main-img1" />
            <img src={img9} alt="main-img" className="main-img2" />
          </div>
        </div>
        <div className="main-box">
          <div className="main-text">
            <span className="main-text-orn">S</span>
            <h1>SUCCESS</h1>
            <p>What does the success of an app depend on?</p>
            <p>
              There are 3 basic, indisputable conditions on the technology side
              that determine whether an app will be successful or not. We will
              support you in implementing each of them to make you a leader in
              the market.{" "}
            </p>
          </div>
          <div id="main-text__readmore">
            <img src={arrow} alt="arrow" className="readmore-arrow"></img>
            <Link to="/blog/success">Read more</Link>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <div className="slider-box">
          <Slider {...settings}>
            <div className="slider-element">
              <div className="slider-card">
                <img src={sli1} alt="computer"></img>
                <h1>TriCity at Dubai conference</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum eligendi consectetur commodi obcaecati reprehenderit
                  ipsa repellat nihil sapiente et doloremque!
                </p>
                <a href="https://www.google.com/">Read more</a>
              </div>
            </div>
            <div className="slider-element">
              <div className="slider-card">
                <img src={sli2} alt="computer"></img>
                <h1>TriCity enters into parntership with Samsung</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum eligendi consectetur commodi obcaecati reprehenderit
                  ipsa repellat nihil sapiente et doloremque!
                </p>
                <a href="https://www.google.com/">Read more</a>
              </div>{" "}
            </div>

            <div className="slider-element">
              <div className="slider-card">
                <img src={sli3} alt="computer"></img>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum eligendi consectetur commodi obcaecati reprehenderit
                  ipsa repellat nihil sapiente et doloremque!
                </p>
                <a href="https://www.google.com/">Read more</a>
              </div>{" "}
            </div>

            <div className="slider-element">
              <div className="slider-card">
                <img src={sli4} alt="computer"></img>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum eligendi consectetur commodi obcaecati reprehenderit
                  ipsa repellat nihil sapiente et doloremque!
                </p>
                <a href="https://www.google.com/">Read more</a>
              </div>{" "}
            </div>

            <div className="slider-element">
              <div className="slider-card">
                <img src={sli5} alt="computer"></img>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum eligendi consectetur commodi obcaecati reprehenderit
                  ipsa repellat nihil sapiente et doloremque!
                </p>
                <a href="https://www.google.com/">Read more</a>
              </div>{" "}
            </div>
          </Slider>
          <div className="mid-text">
      
            <h1>
              Mission, vision,
              <br /> goals and motto
            </h1>
            <span className="mission-orn">MISSION</span>
            <div className="mission-box">

              <h3>Mission</h3>

              <p>
                Not "why?" but "what for?" we created TriCity Solution.
                <br />
                Entrepreneurs are people who are ready to act, accept
                responsibility and are open to risk. Only such people genuinely
                change the world. We want to change this world together with
                them. That is why our priority is partnership in business and
                attention to the quality of the software we produce. We want to
                support organizations at every stage of their technological
                development, using our experience and competence. <br />
                Our unquestionable values that guide our actions:
                <br />
                Partnership and integrity - we want to create business
                relationships based on trust and loyalty. We are convinced that
                the success of our partner is our success.
                <br />
                High quality service - we don't just think of producing
                valuable, secure software, although this is our priority. It is
                also professionalism in dealing with our partners.
                <br />
                Development of our employees and partners - development is the
                highest human need. It is what makes functioning meaningful. We
                want to support our partners in the process of technological
                development of the organization, while making sure that they
                feel confident and secure despite the changes. In order for this
                to take place, at the same time we take great care of the
                development and acquisition of competencies of our employees.
                <br />
              </p>
            </div>
            <div className="motto-holder">
            <img src={img3} alt="motto img" className="motto-img"></img>
            <div className="vision-box">
              <span className="vision-orn">VISION</span>
              <h3>Vision </h3>
              <p>
                The direction of our activities is set by strictly defined
                values. It is thanks to them that TriCity Solution, day by day,
                gains new, satisfied customers, whose number is constantly
                growing. We strive to provide services without regard to
                national borders. We are counting on our diverse team, in terms
                of specialization and knowledge of technology, to be fed by new
                specialists from all over the world.
              </p>
            </div>
            <span className="motto-orn">MOTTO</span>
            <div className="motto-box">
              <h3>Motto</h3><p> We believe that your success is our success.</p>
            </div>
            </div>
          </div>
          <div className="opinions-slider">
            <Slider {...opSettings}>
              <div className="opinions-element">
                <div className="opinions-card">
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <p>
                    The project is a{" "}
                    <span className="bold"> grand success</span>. The user
                    feedback is absolutely overwhelming.
                  </p>
                  <p className="bold">Thomas Wilson</p>
                  <p className="op-subtext">Product Manager</p>
                </div>
              </div>
              <div className="opinions-element">
                <div className="opinions-card">
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <p>
                    The project is a{" "}
                    <span className="bold"> grand success</span>. The user
                    feedback is absolutely overwhelming.
                  </p>
                  <p className="bold">Thomas Wilson</p>
                  <p className="op-subtext">Product Manager</p>
                </div>
              </div>
              <div className="opinions-element">
                <div className="opinions-card">
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <p>
                    The project is a{" "}
                    <span className="bold"> grand success</span>. The user
                    feedback is absolutely overwhelming.
                  </p>
                  <p className="bold">Thomas Wilson</p>
                  <p className="op-subtext">Product Manager</p>
                </div>
              </div>
              <div className="opinions-element">
                <div className="opinions-card">
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <p>
                    The project is a{" "}
                    <span className="bold"> grand success</span>. The user
                    feedback is absolutely overwhelming.
                  </p>
                  <p className="bold">Thomas Wilson</p>
                  <p className="op-subtext">Product Manager</p>
                </div>
              </div>

              <div className="opinions-element">
                <div className="opinions-card">
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <p>
                    The project is a{" "}
                    <span className="bold"> grand success</span>. The user
                    feedback is absolutely overwhelming.
                  </p>
                  <p className="bold">Thomas Wilson</p>
                  <p className="op-subtext">Product Manager</p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="custom-title">
            <h1>The ones that matter...</h1>
            <h2>Our customers</h2>
          </div>

          <div className="customers ">
            <div className="custom-card ">
              <img src={wetog} alt="wetog" className="custom-card__img"></img>
              <h2>Wetog</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
            <div className="custom-card ">
              <img src={real} alt="real" className="custom-card__img"></img>
              <h2>Real Estate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
            <div className="custom-card">
              <img src={menta} alt="menta" className="custom-card__img"></img>
              <h2>Mentaletics</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
            <div className="custom-card">
              <img src={qche} alt="qche" className="custom-card__img"></img>
              <h2>QCHE</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
            <div className="custom-card ">
              <img
                src={helpngo}
                alt="helpngo"
                className="custom-card__img"
              ></img>
              <h2>Help NGO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
            <div className="custom-card">
              <img src={power} alt="power" className="custom-card__img"></img>
              <h2>Power Of Now</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis itaque dolorum possimus unde minima id!
              </p>
              <a href="https://www.google.com/">Check them out!</a>
            </div>
          </div>

          <div className="trust">
            <div className="trust-box">
              <h2>I will trust them...</h2>
              <p>
                Find out how we can help you become a market leader with the
                latest technologies. We will guide you through the entire
                process of your project - from idea and technology selection, to
                design and final result.
              </p>
            </div>
            <Link to="/contact" className="trust-contact">
              Contact us now!
            </Link>
          </div>
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}
