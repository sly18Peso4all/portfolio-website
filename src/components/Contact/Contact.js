import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="contact-wrapper" data-aos="fade-out">
      <h3 className="contact-header">Get in Touch</h3>
      <div className="contact-container">
        <div className="contact-input">
          <input type="text" />
          <label>Name</label>
        </div>
        <div className="contact-input">
          <input type="email" />
          <label>Email</label>
        </div>
        <div className="contact-input">
          <input type="tel" />
          <label>Phone Number</label>
        </div>
        <div className="contact-input">
          <textarea required></textarea>
          <label>Message</label>
        </div>
        <Link className="contact-btn" to="/">
          Send me a message
        </Link>
      </div>
    </div>
  );
};

export default Contact;
