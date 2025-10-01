import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

// import images
import storyImg from "/images/about/aboutus3.jpg";
import founderImg from "/images/about/boss1.png";

// icons
import { FiPenTool, FiGlobe, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";


const teamMembers = [
  { name: "Mpho Ngoepe", role: "CEO / Founder", img: "/images/about/boss1.png" },
  { name: "Hope", role: "Business Administrator", img: "/images/about/founder4.png" },
  { name: "Mpho Itumeleng", role: "Software Developer", img: "/images/about/founder.jpg" },
  { name: "Sharleen Shabangu", role: "Software Developer", img: "/images/about/sharleen.jpg" },
  { name: "Pelma Mahlobogoane", role: "Software Developer", img: "/images/about/ourstory2.jpg" },
  { name: "Isabella Monyeseala", role: "Software Developer", img: "/images/about/our story3.jpg" },
];


const AboutUs = () => {
  return (
    <div id="aboutus" className="aboutus-page">

      {/* Our Story */}
      <motion.section
        className="story-section py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="section-title">Our <span>Story</span></h2>

          <div className="row align-items-center mt-4">
            {/* Text (left on desktop, top on mobile) */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="story-text-wrapper text-center">
                <p className="section-text">
                  We believe the future belongs to those who embrace both
                  creativity and technology. That’s why we are driven by
                  opportunities in the digital and creative world, creating
                  solutions that are innovative and as imaginative as they are
                  impactful.
                </p>
                <p className="section-text">
                  Simple. H-O-C is more than a creative agency — it’s a home. A
                  home for visionaries, talents, and brands who want to tell
                  powerful stories, explore digital frontiers, and leave a lasting
                  legacy.
                </p>
              </div>
            </div>

            {/* Image (right on desktop, below text on mobile) */}
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={storyImg}
                alt="Our Story"
                className="section-img img-fluid glow-hover mx-auto"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Vision */}
      <motion.section
        className="vision-section py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
      </motion.section>

      {/* Our Mission */}
      <motion.section
        className="mission-section py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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

{/* Our Founder */}
<motion.section
  className="founder-section py-5"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="container">
    {/* Title centered at the top */}
    <div className="text-center mb-4">
      <h2 className="section-title">
        Our <span>Founder</span>
      </h2>
    </div>

    {/* Content row */}
    <div className="row align-items-center">
      {/* Image LEFT */}
      <div className="col-md-6 text-center mb-4 mb-md-0 order-1 order-md-1">
        <img
          src={founderImg}
          alt="Founder"
          className="section-img img-fluid glow-hover"
        />
      </div>

      {/* Text RIGHT */}
      <div className="col-md-6 order-2 order-md-2">
        <p className="section-text">
          Mpho Ngoepe is the visionary founder and CEO of
          Simple. H-O-C. As our Managing Director, she has cultivated a
          space where artistry and technology seamlessly blend to shape
          culture and inspire transformation.
        </p>
        <p className="section-text">
          Driven by the belief that the future belongs to those who embrace
          both creativity and digital innovation, Mpho founded the company
          to be more than just an agency — she created a home for
          visionaries, talents, and brands. Her leadership is defined by a
          passion for merging imagination with innovation.
        </p>
      </div>
    </div>
  </div>
</motion.section>



      {/* Meet Our Team */}
 <motion.section
      className="team-section py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title">Meet the <span>Team</span></h2>
        <div className="row g-4 justify-content-center mt-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="col-6 col-md-4 col-lg-3"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="team-card text-center">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} className="team-img" />
                </div>
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    </div>

  );
};

export default AboutUs;
