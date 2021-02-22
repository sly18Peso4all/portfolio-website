import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Skills.scss";
import techimages from "../../data/techdata";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="skills-section" data-aos="fade-left" id="skills">
      <h3>Skills</h3>
      <h4>Technologies i have worked with</h4>
      <div className="skills-gallery">
        {techimages.map((item, key) => (
          <div className="gallery" key={key} value={item}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
