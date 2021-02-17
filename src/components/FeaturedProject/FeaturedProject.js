import React, { useEffect } from "react";
import info from "../../images/airbnb.png";
import "./FeaturedProject.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedProject = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="featured-project" data-aos="fade-out" id="featured">
      <div className="featured-project__content">
        <h4 className="featured-project__subtitle">featured project</h4>
        <h3 className="featured-project__title">Airbnb-clone Website</h3>
        <p className="featured-project__description">
          A Website that allows users to rent available room of their choice at
          different Locations. The Website was built using React, JavaScript and
          React-date-picker.
        </p>
      </div>
      <div className="featured-project__image">
        <img src={info} alt="" />
        <a
          className="project-btn"
          href="https://airbnbsite-clone.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          view project
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
