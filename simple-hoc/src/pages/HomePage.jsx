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

      
        <Work />
      

      <TalentSection />

      <ClientTestimonials />

        <Contact />
    

       <ScrollToTop />
    </div>
    
  );
};

export default HomePage;
