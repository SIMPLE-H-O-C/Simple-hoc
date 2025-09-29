import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import ClientTestimonials from "../components/ClientTestimonials";
import Work from "../components/Work";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Placeholder sections for smooth scrolling */}
      <section id="aboutus" style={{ height: "100vh", padding: "4rem" }}>
        <h2>About Us</h2>
      </section>

      <Services />

      {/* Work Section */}
      <section id="work" style={{ minHeight: "100vh", padding: "4rem" }}>
        <Work />
      </section>

      <TalentSection />
      <ClientTestimonials />

      <section
        id="contact"
        style={{ height: "100vh", padding: "4rem", background: "#f8f9fa" }}
      >
        <h2>Contact</h2>
      </section>
    </div>
  );
}
