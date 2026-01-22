import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ClientTestimonials from "../components/ClientTestimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import AboutUs from "../components/AboutUs";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating back with a scroll target
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Delay slightly to ensure section is rendered
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Work />
      <TalentSection />
      <ClientTestimonials />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default HomePage;
