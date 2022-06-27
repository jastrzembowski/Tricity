import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-text">
          <h1>Tell us about your needs.</h1>
          <form className="contact-form">
            <input
              className="contact-input"
              type="text"
              placeholder="Your name*"
            ></input>
            <input
              className="contact-input"
              type="email"
              placeholder="Your e-mail address*"
            ></input>
            <input
              className="contact-input"
              type="number"
              placeholder="Phone number"
            ></input>
                <input
              className="contact-input"
              type="text"
              placeholder="What would you like to do?*"
            ></input>
            <textarea
              className="contact-input contact-msg"
              rows="4"
              cols="50"
              placeholder="Tell us about your project*"
            ></textarea>
        
            <input
              className="contact-submit__button"
              type="submit"
              value="Contact us"
            ></input>
            <p>
              or contact us directly at{" "}
              <span className="bold link"> tricity@tricity.pl</span>
            </p>
          </form>
          <span className="captcha-text">
            {" "}
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </span>
        </div>
        <div className="contact-img"></div>        
      </div>
    </div>
  );
}
