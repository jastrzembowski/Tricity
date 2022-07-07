import React from "react";

import success from "../../images/success.jpg";
import programmer1 from "../../images/icons/programmer1.png";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import bg1 from "../../images/shapes/bg3.png";

function Success() {
  return (
    <>
      <div className="success-top-box">
        <img src={success} alt="success-bg"></img>
        <div className="success-top-text">
          <h1>SUCCESS</h1>
          <h3>and everything you need to know.</h3>
        </div>
      </div>{" "}
      <img src={bg1} alt="bg" className="succes-bg1"></img>
      <div className="container">
        <img
          src={programmer1}
          alt="programmer"
          className="programmer-success"
        ></img>
        <span className="success-bg-text">SUCCESS</span>
        <div className="success-container">
          <h1>
            {" "}
            What does the <span className="bold"> success</span> of an app
            depend on?
          </h1>
          <h2>
            There are 3 basic, indisputable conditions on the technology side
            that determine whether an app will be successful or not.
            <br /> We will support you in implementing each of them to make you
            a leader in the market.
          </h2>
          <p className="success-title">
            1. First and foremost, <span className="bold"> quality</span>
          </p>
          <p>
            Customers who download an app expect quality from it. It doesn't
            matter if your app costs 99 cents or if you offer it for free. This
            is clearly seen in the rankings of the best free apps - only
            well-written and designed programs win there. Constant crashes,
            underdevelopment in terms of graphics, user experience or
            functionality will make the user remove the app very quickly. A
            product that doesn't change loses its value, and only quality apps
            have a chance to stay at the top. We know how much success is
            influenced by the attention to detail of the project we implement,
            so in our team we employ only professionals for whom the highest
            quality is a priority.
          </p>
          <p className="success-title">
            2. <span className="bold">KISS</span> or Keep It Simple, Stupid
          </p>
          <p>
            Have you ever used an application for which you needed a manual? How
            long did you use it? It's not from today that sometimes less is
            more. For the perfect app, we shouldn't need a manual. We strive for
            the greatest possible intuitiveness in the programs we design. We
            create applications in such a way that people of all ages can use
            them.
          </p>
          <p className="success-title">
            3. Take <span className="bold">care</span> of your users
          </p>
          <p>
            Taking care of the user is not only offering discounts or providing
            free functionality. It's first and foremost, providing support and
            being responsive. Users want to feel important and shared
            responsibility for app development. Taking their feedback into
            account is key if you want to gain loyal customers. With our team,
            this will not be difficult. We are happy to respond to user
            suggestions and provide software updates quickly.
          </p>
          <h3> With us, it's 3 easy steps for you to reach your goal.</h3>
        
        </div>
        <div className="success-ad">
            <p> Work with us</p>
            <h3>
              Hire a dedicated team or let us build your product from scratch
            </h3>
            <div className="main-book-button success-button">
              <Link to="/contact">Book free consultation</Link>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
