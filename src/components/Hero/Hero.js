import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="hero-container" data-aos="fade-in" id="hero">
      <div className="hero-content">
        <h4 className="hero-name">Joseph Onuoha</h4>
        <h1 className="hero-title">FULLSTACK WEB DEVELOPER</h1>
        <p className="hero-description">
          A creative full stack developer who loves to bring clarity to complex
          concepts through design. I have a genuine passion for inspiring design
          and innovative technology, I enjoy solving problems with clean
          scalable solutions.
        </p>
        <div className="hero-icons">
          <a
            href="https://www.linkedin.com/in/joseph-onuoha/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <FaLinkedinIn size={25} style={{ fill: " #f8ab37" }} />
          </a>
          <a
            href="https://github.com/sly18Peso4all"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <AiFillGithub size={25} style={{ fill: " #f8ab37" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-onuoha/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <GrFacebook size={25} style={{ fill: " #f8ab37" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
