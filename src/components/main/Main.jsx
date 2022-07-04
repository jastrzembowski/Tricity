import React from "react";
import Slider from "react-slick";
import Faq from "./Faq";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import "./main.css";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, alias?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio provident reiciendis ab architecto? Perspiciatis optio
              officia porro mollitia quas!
            </p>
            <div className="main-book-button">
              <Link to="/contact">Book free consultation</Link>
            </div>
          </div>
          <div className="main-img">
            <img src={img2} alt="main-img" className="main-img1" />
            <img src={img1} alt="main-img" className="main-img2" />
          </div>
        </div>
        <div className="main-box">
          <div className="main-text">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              esse molestias ex.
            </h1>
          </div>
          <div id="main-text__readmore">
            <a href="https://www.google.com/">Read more</a>{" "}
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <div className="slider-box">
          <Slider {...settings}>
            <div className="slider-element">
              <div className="slider-card">
                <img src={sli1} alt="computer"></img>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
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
              Speed up Lorem ipsum dolor sit.
              <br /> amet consectetur adipisicing elit.{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              obcaecati, maxime est soluta quam ex quod praesentium officiis
              mollitia voluptate t. Nesciunt obcaecati, maxime est soluta quam
              ex quod praesentium!
            </p>
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

          <div className="trust">
            <div className="trust-box">
              <h2>I will trust them...</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, eius dolore, porro reprehenderit non repudiandae, sequi
                voluptatum ad ipsam quam facere facilis. Cupiditate consequatur
                ratione facere distinctio iure asperiores nihil.
              </p>
            </div>
            <Link to="/contact" className="trust-contact">
              Contact us now!
            </Link>
          </div>
          <div className="custom-title">
            <h1>The ones that matter...</h1>
            <h2>Our customers</h2>
          </div>
          <hr />

          <div className="customers scroll-reveal right">
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
          <Faq />
        </div>
        <Footer />

      </div>
    </>
  );
}
