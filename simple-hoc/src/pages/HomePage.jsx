import ClientTestimonials from "../components/ClientTestimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import AboutUs from "../components/AboutUs";
import Work from "../components/Work";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <AboutUs />

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
};

export default HomePage;
