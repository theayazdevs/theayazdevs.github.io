import React from "react";
import "../assets/styles/contact.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-background"></div>
      <div className="social-media-icons">
        {/*<a href="mailto:" className="social-media-button">
          <FaEnvelope />
          Email
        </a>*/}
        <a
          href="https://www.linkedin.com/in/ayaz-ahmad-88b15122a/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-button"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
