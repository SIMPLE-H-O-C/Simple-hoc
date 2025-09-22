import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

// import images from assets folder
import heroImg from "../assets/abouthero.PNG";
import storyImg from "../assets/ourstory2.jpg";
import founderImg from "../assets/founder4.png";

// import icons
import { FiPenTool, FiGlobe, FiUsers } from "react-icons/fi";

const AboutUs = () => {
  return (
     <div className="aboutus-page">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Text left */}
            <div className="col-md-6">
              <h1 className="hero-title">
                <span>Where</span> artistry meets technology to shape culture
              </h1>
            </div>
            {/* Image right */}
            <div className="col-md-6 text-center">
              <img src={heroImg} alt="Hero Visual" className="hero-img img-fluid" />
            </div>
          </div>
        </div>
      </section>

        {/* Our Story */}
      <section className="story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image left */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src={storyImg} alt="Our Story" className="img-fluid rounded shadow" />
            </div>
            {/* Text right */}
            <div className="col-md-6">
              <h2 className="section-title"> Our <span>Story</span></h2>
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
                to be more than just an agency—she created a home for visionaries,
                talents, and brands. Her leadership is defined by a passion for
                merging imagination with innovation.
              </p>
            </div>
            {/* Image right */}
            <div className="col-md-6 text-center mt-4 mt-md-0 founder-img-wrapper">
  <div className="founder-circle"></div>
  <img src={founderImg} alt="Founder" className="founder-img" />
</div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="vision-section py-5">
        <div className="container">
          <h2 className="section-title">Our <span>Vision</span></h2>
          <p className="section-text text-center mb-5">
            To be the leading creative house where artistry meets technology
            innovation, shaping culture and inspiring transformation in the
            digital era.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="vision-card p-4 h-100 text-center">
                <FiPenTool className="vision-icon" />
                <h5>To simplify creativity.</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-card p-4 h-100 text-center">
                <FiGlobe className="vision-icon" />
                <h5>
                  To unlock opportunities in both the creative and digital world.
                </h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-card p-4 h-100 text-center">
                <FiUsers className="vision-icon" />
                <h5>
                  To make innovation accessible, inspiring, and human.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
