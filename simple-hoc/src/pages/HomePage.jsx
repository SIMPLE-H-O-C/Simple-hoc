import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import ClientTestimonials from "../components/ClientTestimonials";
import Work from "../components/Work";
import Contact from "../components/Contact"; // import contact component

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* About Us Section */}
      <section id="aboutus" style={{ minHeight: "100vh", padding: "4rem" }}>
        <h2>About Us</h2>
      </section>

      <Services />

      {/* Work Section */}
      <section id="work" style={{ minHeight: "100vh", padding: "4rem" }}>
        <Work />
      </section>

      <TalentSection />
      <ClientTestimonials />

      {/* Contact Section */}
      <section
        id="contact"
        style={{ minHeight: "100vh", padding: "4rem", background: "#f8f9fa" }}
      >
        <Contact />
      </section>
    </div>
  );
}
