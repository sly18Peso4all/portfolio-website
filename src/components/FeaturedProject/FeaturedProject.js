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
        <h3 className="featured-project__title">Forkify Website</h3>
        <p className="featured-project__description">
          A Website that allows users to a choose variety of ingredients,
          bookmark and save it. With the Option of creating their ingredient.
          The Website was built using JavaScript, CSS3, HTML and parcel as the
          bundler.
        </p>
        <a
          className="featured-project__btn"
          href="https://forkify-foodrecipe.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          view project
        </a>
      </div>
      <div className="featured-project__image">
        <img src={info} alt="" />
      </div>
    </div>
  );
};

export default FeaturedProject;
