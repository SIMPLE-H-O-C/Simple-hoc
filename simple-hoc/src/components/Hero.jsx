import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.img
        <div className="hero-right">
          <h1 className="hero-title">
            SI<span className="highlight-mp">MP</span>LE.
          </h1>
          <h3 className="hero-subtitle">House Of Creatives</h3>

        
          <div className="hero-tagline-container">
            <p className="hero-tagline typewriter">
              Where Artistry Meets Innovation
            </p>
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
