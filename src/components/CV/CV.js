import React, { useEffect } from "react";
import "./CV.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Pdf from "../../pdf/CV_JosephOnuoha.pdf";

const CV = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="cv-container" data-aos="fade-left" id="cv">
      <h3>Check out my resume</h3>

      <a className="resume-btn" href={Pdf} target="_blank" rel="noreferrer">
        Grab a copy
      </a>
    </div>
  );
};

export default CV;
