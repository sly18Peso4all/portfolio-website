import React, { useEffect } from "react";
import "./Projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import project from "../../data/projectdata";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="project-overview">
      <h3>What i've done</h3>
      <div className="project-content" data-aos="fade-right">
        {project.map((item, key) => (
          <div className="project-details" key={key} value={item}>
            <div className="project-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h5>{item.header}</h5>
            <h4 className="project-title">{item.title}</h4>
            <p>{item.description}</p>
            <Link className="project-btn" to="/">
              Explore Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
