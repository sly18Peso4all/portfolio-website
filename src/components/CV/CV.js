import React, { useEffect } from "react";
import "./CV.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const CV = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="cv-container" data-aos="fade-left">
      <h3>Check out my resume</h3>
      <Link className="resume-btn" to="/">
        Grab a copy
      </Link>
    </div>
  );
};

export default CV;
