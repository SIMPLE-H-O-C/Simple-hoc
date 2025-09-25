import ClientTestimonials from "../components/ClientTestimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";

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

      <TalentSection />

      <ClientTestimonials />

      <section id="contact" style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}>
        <h2>Contact</h2>
      </section>
    </div>
  );
};

export default HomePage;
