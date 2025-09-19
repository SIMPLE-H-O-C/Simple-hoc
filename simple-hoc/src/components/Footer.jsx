import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
  {/* Logo + slogan */}
  <div className="footer-logo">
    <img src="/logo.png" alt="SIMPLE Logo" className="logo-img" />
    
  </div>


        {/* Navigation columns */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
                <li><a href="#">Work</a></li>
                  <li><a href="#">Talent</a></li>
                    <li><a href="#">Testimonials</a></li>
              
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Talent Management</a></li>
              <li><a href="#">Brand Management</a></li>
              <li><a href="#">Social Media Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Help Center</a></li>
        
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* Social media + copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
        
        </div>
        <p>© {new Date().getFullYear()} SIMPLE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
