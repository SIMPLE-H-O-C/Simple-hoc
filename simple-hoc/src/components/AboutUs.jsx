import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

// import images
import storyImg from "/images/about/aboutus3.jpg";
import founderImg from "/images/about/MphoNgoepe.png";

// icons
import { motion } from "framer-motion";
import { FiGlobe, FiPenTool, FiUsers } from "react-icons/fi";
import { FiEye, FiTarget } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";



const teamMembers = [
  {
    name: "Mpho Ngoepe",
    role: "CEO / Founder",
    img: "/images/about/NgoepeMpho.png",
  },
  {
    name: "Murangi Nemaungani",
    role: "Business Administrator",
    img: "/images/about/Hope.png",
  },
  {
    name: "Mpho Itumeleng",
    role: "Web Developer",
    img: "/images/about/Mpho.png",
  },
  {
    name: "Sharleen Shabangu",
    role: "Software Developer",
    img: "/images/about/sharleen.png",
  },
  {
    name: "Pelma Mahlobogoane",
    role: "Software Developer",
    img: "/images/about/Pelma.jpg",
  },
  {
    name: "Isabella Monyeseala",
    role: "Web Developer",
    img: "/images/about/Isabella.png",
  },
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
    <h2 className="section-title">
      OUR <span>STORY</span>
    </h2>

    {/* Centered text under header */}
    <div className="story-text-wrapper mt-4">
      <p className="section-text">
        We believe the future belongs to those who embrace both
        creativity and technology. That’s why we are driven by
        opportunities in the digital and creative world. Creating
        solutions that are innovative and impactful.
      </p>
      <p className="section-text">
        Simple-HOC is more than a creative agency it’s a home. A
        home for visionaries, talents, and brands who want to tell
        powerful stories, explore digital frontiers, and leave a
        lasting legacy.
      </p>
    </div>
  </div>
</motion.section>

      {/* Vision, Mission & Values */}
<motion.section
  className="vision-mission-wrapper py-5"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="container">
    <div className="row g-4 text-center">

      {/* Vision */}
      <motion.div
        className="col-lg-4 col-md-6"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="vmv-block">
          <FiEye className="vmv-icon" />
          <h2 className="section-title">
            OUR <span>VISION</span>
          </h2>
          <p className="section-text">
            To be the leading agency where artistry meets technological innovations aiming to
            shape culture and inspire transformation in the digital era.
          </p>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        className="col-lg-4 col-md-6"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="vmv-block">
          <FiTarget className="vmv-icon" />
          <h2 className="section-title">
            OUR <span>MISSION</span>
          </h2>
          <p className="section-text">
            To empower visionaries and brands by simplifying creativity and
            delivering innovative, human-centered solutions that blend artistry
            with technology.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        className="col-lg-4 col-md-12"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="vmv-block">
          <FaHandsHelping className="vmv-icon" />
          <h2 className="section-title">
            OUR <span>VALUES</span>
          </h2>
          <p className="section-text">
            Creativity with purpose, integrity in every action, collaboration
            over competition, and people-first innovation in everything we do.
          </p>
        </div>
      </motion.div>

    </div>
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
                Mpho Ngoepe is the visionary founder and CEO of Simple. H-O-C.
                As our Managing Director, she has cultivated a space where
                artistry and technology seamlessly blend to shape culture and
                inspire transformation.
              </p>
              <p className="section-text">
                Driven by the belief that the future belongs to those who
                embrace both creativity and digital innovation, Mpho founded the
                company to be more than just an agency — she created a home for
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
          <h2 className="section-title">
            Meet the <span>Team</span>
          </h2>
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
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img"
                    />
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
