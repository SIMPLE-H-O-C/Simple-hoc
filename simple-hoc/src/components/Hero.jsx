import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          We Build <span className="highlight">Digital Experience</span> <br />
          That Matter
        </h1>
       
        <div className="hero-buttons">
         
         <a href="#contact" className="btn btn-outline">
            Explore Our Work
          </a> 
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
