import React from "react";
import AboutUs from "./AboutUs"; // adjust path if it's inside /pages


const HomePage = () => {
  return (
    <div>
      {/* Navbar placeholder section (your teammate will replace this later) */}
      <section id="navbar" style={{ height: "100vh", padding: "4rem" }}>
        <h2>Navbar Placeholder</h2>
      </section>

      {/* Home Hero */}
      <section id="home" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Home</h2>
      </section>

      {/* About Us Section*/}
      <section id="aboutus">
        <AboutUs />
      </section>

      {/* Services */}
      <section id="services" style={{ height: "100vh", padding: "4rem" }}>
        <h2>Services</h2>
      </section>

      {/* Work */}
      <section id="work" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Work</h2>
      </section>

      {/* Talent */}
      <section id="talent" style={{ height: "100vh", padding: "4rem" }}>
        <h2>Talent</h2>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Testimonials</h2>
      </section>

     {/* Contact */}
      <section id="contact" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
       <h2>ContactUs</h2> 
      </section>
    </div>
  );
};

export default HomePage;
