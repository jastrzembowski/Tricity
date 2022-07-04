import React from "react";
import { Link } from "react-router-dom";

import img2 from "../../images/img2.jpg";
import Footer from "../footer/Footer";

function Cloud() {
  return (
    <>
    <div className="container">
      <header className="cloud head">
        <h1>Cloud and DevOps</h1>
        <h3>Designed to please your customer</h3>
        <div className="serv-contact_button">
          <Link to="/contact">Contact us</Link>
        </div>
      </header>
      <article className="mobile-top">
        <article className="mobile-top-text-holder">
          <h3>Grow Your Enterprise with the Right Mobile Solutions Partner</h3>
          <p>
            Successful mobile application development rationally combines three
            aspects: a market, user, and the product itself. These three factors
            should work together in harmony to deliver unique value, great
            usability, and excellent performance to users. With the right tools,
            partner, and methodologies, you can ensure your mobile product is
            robust and well-fitted to your target market’s needs. Whether the
            application is consumer or business-oriented, Tricity Solutions
            mobile and cross-industry expertise enables us to collaborate with
            you to develop cutting-edge, secure, and scalable mobile apps that
            work across all popular platforms. Tricity solution uses a
            combination of best practices and a customized mix of technologies
            to optimize development and provide a unique user experience.
          </p>
        </article>
        <aside className="mobile-top-img-holder">
          <img src={img2} alt="img"></img>
        </aside>
      </article>
    </div>
    
    <Footer></Footer>
    </>
  );
}

export default Cloud;
