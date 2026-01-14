import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiX } from "react-icons/si";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.simple-hoc.co.za/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      alert(
        "Thank you for contacting Simple H-O-C! We will get back to you soon."
      );
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="contact-section" id="contact">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2 className="fw-bold mb-5">GET IN TOUCH</h2>
        <p>
          Reach out to us using the contact details below or fill out the form,
          and we'll get back to you!
        </p>

        <div className="contact-info">
          <div>
            <FaPhoneAlt /> 082 405 5875
          </div>
          <div>
            <MdEmail /> info@simple-hoc.co.za
          </div>
          <div>
            <MdLocationOn /> 41 Juta Street, Johannesburg, 2001
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <SiX />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
