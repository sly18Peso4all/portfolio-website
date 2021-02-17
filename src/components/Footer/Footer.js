import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";

import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="footer-wrapper" data-aos="fade-right">
      <div className="footer-wrapper__link">
        <a
          href="https://www.linkedin.com/in/joseph-onuoha/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={25} style={{ fill: " #f8ab37" }} />
        </a>
        <a
          href="https://github.com/sly18Peso4all"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={25} style={{ fill: " #f8ab37" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-onuoha/"
          target="_blank"
          rel="noreferrer"
        >
          <GrFacebook size={25} style={{ fill: " #f8ab37" }} />
        </a>
      </div>
      <p>&copy;Joseph Onuoha</p>
    </div>
  );
};

export default Footer;
