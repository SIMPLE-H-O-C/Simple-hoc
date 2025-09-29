import ClientTestimonials from "../components/ClientTestimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <AboutUs />

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
