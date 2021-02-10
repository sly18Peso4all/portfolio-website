import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <FaLinkedinIn size={25} style={{ fill: " #f8ab37" }} />
        </Link>
        <Link to="/">
          <AiFillGithub size={25} style={{ fill: " #f8ab37" }} />
        </Link>
        <Link to="/">
          <GrFacebook size={25} style={{ fill: " #f8ab37" }} />
        </Link>
      </div>
      <p>&copy;Joseph Onuoha</p>
    </div>
  );
};

export default Footer;
