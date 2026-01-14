import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Megaphone, Share2, Users, PenTool, Calendar } from "lucide-react";
import "../styles/Services.css";

const services = [
  {
    icon: <Briefcase size={40} />,
    title: "Talent Management",
    desc: "We handle bookings, tours, and career support so our talent can focus on performing while we manage the rest."
  },
  {
    icon: <PenTool size={40} />,
    title: "Brand Management",
    desc: "We build strong, memorable brands by boosting awareness, loyalty, and reputation through strategic storytelling."
  },
  {
    icon: <Share2 size={40} />,
    title: "Digital Solutions",
    desc: "We offer future-ready digital opportunities and solutions including app development, digital campaigns and custom software to simplify creativity and connect people globally. "
  },
  {
    icon: <Calendar size={40} />,
    title: "Events Management",
    desc: "We plan and execute unforgettable events that bring brands and people together through creativity and culture."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
