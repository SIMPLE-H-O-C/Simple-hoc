import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

// import images from assets folder
import heroImg from "../assets/about1.jpg";
import storyImg from "../assets/our story3.jpg";
import founderImg from "../assets/founder4.png";

// import icons
import { FiPenTool, FiGlobe, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutUs = () => {
     return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container text-center hero-content">
          <motion.h1
            className="hero-heading"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="hero-subheading"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Where <span>artistry</span> meets <span>technology</span> to shape culture
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image left */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src={storyImg} alt="Our Story" className="section-img img-fluid shadow" />
            </div>
            {/* Text right */}
            <div className="col-md-6">
              <h2 className="section-title">Our <span>Story</span></h2>
              <p className="section-text">
                We believe the future belongs to those who embrace both
                creativity and technology. That’s why we are driven by
                opportunities in the digital and creative world, creating
                solutions that are innovative and as imaginative as they are
                impactful.
              </p>
              <p className="section-text">
                Simple. H-O-C is more than a creative agency it’s a home. A
                home for visionaries, talents, and brands who want to tell
                powerful stories, explore digital frontiers, and leave a lasting
                legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="founder-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text left */}
            <div className="col-md-6">
              <h2 className="section-title">Our <span>Founder</span></h2>
              <p className="section-text">
                <strong>Mpho Ngoepe</strong> is the visionary founder and CEO of
                Simple. H-O-C. As our Managing Director, she has cultivated a
                space where artistry and technology seamlessly blend to shape
                culture and inspire transformation.
              </p>
              <p className="section-text">
                Driven by the belief that the future belongs to those who embrace
                both creativity and digital innovation, Mpho founded the company
                to be more than just an agency she created a home for visionaries,
                talents, and brands. Her leadership is defined by a passion for
                merging imagination with innovation.
              </p>
            </div>
            {/* Image right */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img src={founderImg} alt="Founder" className="section-img img-fluid shadow" />
            </div>
          </div>
        </div>
      </section>

    {/* Our Vision */}
<section className="vision-section py-5">
  <div className="container text-center">
    <h2 className="section-title">Our <span>Vision</span></h2>
    <p className="section-text mb-5">
      To be the leading creative house where artistry meets technology
      innovation, shaping culture and inspiring transformation in the
      digital era.
    </p>
    <div className="row g-4">
      {[
        { icon: <FiPenTool className="vision-icon" />, text: "To simplify creativity." },
        { icon: <FiGlobe className="vision-icon" />, text: "To unlock opportunities in both the creative and digital world." },
        { icon: <FiUsers className="vision-icon" />, text: "To make innovation accessible, inspiring, and human." }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="col-md-4"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="vision-card p-4 h-100 text-center">
            {item.icon}
            <h5>{item.text}</h5>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

     {/* Our Mission */}
<motion.section
  className="mission-section py-5"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="container text-center">
    <h2 className="section-title">Our <span>Mission</span></h2>
    <p className="section-text">
      To empower visionaries and brands by simplifying creativity and
      delivering innovative, human-centered solutions that blend artistry
      with technology to build a lasting legacy.
    </p>
  </div>
</motion.section>
    </div>
  );
};

export default AboutUs;
