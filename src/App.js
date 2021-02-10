import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import CV from "./components/CV/CV";
import "./App.scss";
import ReactParticles from "react-particles-js";
import particlesConfig from "./ParticlesConfig";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: -1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      <div style={{ position: "relative" }}>
        <NavBar />
        <Hero />
        <FeaturedProject />
        <Skills />
        <Projects />
        <CV />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
