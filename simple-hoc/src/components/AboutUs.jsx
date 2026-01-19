import { useState } from "react";
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
    description: "Founder and creative visionary driving Simple-HOC's mission of blending artistry with technology to create meaningful digital experiences.",
    linkedin: "https://www.linkedin.com/in/mpho-ngoepe",
    twitter: "https://twitter.com/mphongoepe",
    email: "Mpho.Ngoepe@simpleHoc.co.za"
  },
  {
    name: "Hope Nemaungani",
    role: "Business Administrator",
    img: "/images/about/HopeM.png",
    description: "Skilled business administrator ensuring smooth operations and strategic planning to support Simple-HOC's growth and success.",
    linkedin: "https://www.linkedin.com/in/hope-nemaungani",
    twitter: "https://twitter.com/hopenemaungani",
    email: "hope.nemaungani@simple-hoc.co.za"
  },
  {
    name: "Mpho Itumeleng",
    role: "Web Developer",
    img: "/images/about/Mpho.png",
    description: "Talented web developer crafting responsive and user-friendly websites that bring creative visions to life.",
    linkedin: "https://www.linkedin.com/in/mpho-itumeleng-202794295",
    twitter: "https://twitter.com/mphoitumeleng",
    email: "mpho.itumeleng@simple-hoc.co.za"
  },
  {
    name: "Sharleen Shabangu",
    role: "Software Developer",
    img: "/images/about/Leen.png",
    description: "Innovative software developer building robust applications and solutions that power Simple-HOC's digital ecosystem.",
    linkedin: "https://www.linkedin.com/in/sharleen-shabangu-a6a1b220a",
    twitter: "https://twitter.com/sharleenshabangu",
    email: "sharleen.shabangu@simple-hoc.co.za"
  },
  {
    name: "Pelma Mahlobogoane",
    role: "Software Developer",
    img: "/images/about/Pelma.jpg",
    description: "Dedicated software developer focused on creating efficient and scalable solutions for complex technical challenges.",
    linkedin: "https://www.linkedin.com/in/pelma-monere-mahlobogoane-62a296280",
    twitter: "https://twitter.com/pelmamahlobogoane",
    email: "pelma.mahlobogoane@simple-hoc.co.za"
  },
  {
    name: "Isabella Monyeseala",
    role: "Web Developer",
    img: "/images/about/Isabella.png",
    description: "Creative web developer passionate about designing beautiful and functional digital experiences for users.",
    linkedin: "https://www.linkedin.com/in/isabella-monyeseala",
    twitter: "https://twitter.com/isabellamonyeseala",
    email: "isabella.monyeseala@simple-hoc.co.za"
  },
];

const AboutUs = () => {
  // State to track the selected team member (default is CEO at index 0)
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [isLocked, setIsLocked] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsLocked(true);
  };

  const handleCardHover = (member) => {
    if (!isLocked) {
      setSelectedMember(member);
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setSelectedMember(teamMembers[0]);
    }
  };

  const handleOutsideClick = () => {
    setIsLocked(false);
    setSelectedMember(teamMembers[0]);
  };

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
              creativity and technology. That's why we are driven by
              opportunities in the digital and creative world. Creating
              solutions that are innovative and impactful.
            </p>
            <p className="section-text">
              Simple-HOC is more than a creative agency it's a home. A
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

      {/* Our Team */}
      <motion.section
        className="team-section py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onClick={handleOutsideClick}
      >
        <div className="container" onClick={(e) => e.stopPropagation()}>
          <h2 className="section-title text-center mb-5">
            MEET THE <span>TEAM</span>
          </h2>

          <div className="row align-items-start">
            {/* Featured Member Display (Dynamic) */}
            <motion.div
              className="col-lg-4 col-md-12 mb-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={selectedMember.name} 
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="team-featured-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="team-featured-img"
                />

                <h4 className="team-name">{selectedMember.name}</h4>
                <p className="team-role">{selectedMember.role}</p>

                <p className="team-featured-text">
                  {selectedMember.description}
                </p>

                {/* Socials */}
                <div className="team-socials">
                  <a href={selectedMember.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={`mailto:${selectedMember.email}`}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Grid (All 6 members) */}
            <div 
              className="col-lg-8 col-md-12 team-grid-wrapper"
              onMouseLeave={handleMouseLeave}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="row g-4 justify-content-center">
                {teamMembers.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="col-6 col-md-4"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`team-card ${selectedMember.name === member.name ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(member);
                      }}
                      onMouseEnter={() => handleCardHover(member)}
                    >
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
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;