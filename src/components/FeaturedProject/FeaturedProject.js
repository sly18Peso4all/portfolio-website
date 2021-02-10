import React, { useEffect } from "react";
import info from "../../images/info 5.jpg";
import "./FeaturedProject.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="featured-project" data-aos="fade-out">
      <div className="featured-project__content">
        <h4 className="featured-project__subtitle">featured project</h4>
        <h3 className="featured-project__title">Hotel booking Website</h3>
        <p className="featured-project__description">
          A Hotel booking Website that allows users to reserve a room of their
          choice. The Website was built using React, JavaScript and GSAP for
          frontend , Nodejs and Express for Backend with MongoDB as DataBase.
        </p>
      </div>
      <div className="featured-project__image">
        <img src={info} alt="" />
        <Link className="project-btn" to="/">
          view project
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProject;
