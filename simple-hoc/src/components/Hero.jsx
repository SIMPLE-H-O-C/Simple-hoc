import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
      
        <div className="hero-left">
          <motion.img
            src="/logo.png"
            alt="Logo"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-logo"
          />
        </div>

       
        <div className="hero-right">
         <h1 className="hero-title">
  SI<span className="highlight-mp">MP</span>LE
  <span className="square-mark"></span>
</h1>

          <h3 className="hero-subtitle">House Of Creatives</h3>

        
          <div className="hero-tagline-container">
            <p className="hero-tagline typewriter">
              Where Artistry Meets Innovation
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#work" className="btn btn-outline">
              View Our Work
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
