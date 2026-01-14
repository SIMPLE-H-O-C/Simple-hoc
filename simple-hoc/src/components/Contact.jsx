import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    success: true,
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

      setPopup({
        show: true,
        message:
          "Thank you for contacting Simple H-O-C! We will get back to you soon.",
        success: true,
      });

      setFormData({ name: "", email: "", contact: "", message: "" });

      // Auto close popup after 3 seconds
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 3000);
    } catch (error) {
      setPopup({
        show: true,
        message: "Something went wrong. Please try again later.",
        success: false,
      });
      console.error(error);

      // Auto close popup after 3 seconds
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 3000);
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
            href="https://www.facebook.com/people/Simple-HOC/61586084716315/?rdid=6puRLZUN1javGo2J&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17tBrfHNwW%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/simple_hoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          {/* <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <SiX />
          </a> */}
          <a
            href="https://www.tiktok.com/@simple_hoc?_r=1&_t=ZS-930Y2BKzirK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          {/* 
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a> */}
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
      {/* Popup modal */}
      {popup.show && (
        <div className="popup-overlay">
          <div className={`popup ${popup.success ? "success" : "error"}`}>
            <h3>{popup.success ? "Message Sent" : "Error"}</h3>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ ...popup, show: false })}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
