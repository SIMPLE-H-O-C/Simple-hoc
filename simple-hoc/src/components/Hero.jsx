import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
     <div className="hero-content">
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
    ease: "easeInOut"
  }}
/>

        <div className="hero-buttons">
          <a href="#work" className="btn btn-outline">
            View Our Work
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
