import ClientTestimonials from "../components/ClientTestimonials";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import AboutUs from "../components/AboutUs";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer"


const HomePage = () => {
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
