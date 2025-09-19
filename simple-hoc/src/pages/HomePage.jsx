import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Placeholder sections for smooth scrolling */}
      <section id="aboutus" style={{ height: "100vh", padding: "4rem" }}>
        <h2>About Us</h2>
      </section>

      <Services />

      <section id="work" style={{ height: "100vh", padding: "4rem" }}>
        <h2>Work</h2>
      </section>

      <section id="talent" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Talent</h2>
      </section>

      <section id="testimonials" style={{ height: "100vh", padding: "4rem" }}>
        <h2>Testimonials</h2>
      </section>

      <section id="contact" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Contact</h2>
      </section>
    </div>
  );
};

export default HomePage;
