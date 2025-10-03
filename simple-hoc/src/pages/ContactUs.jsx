import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, Clock, MapPin, Send, MessageCircle, Users, Target, Zap, CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.subject) errors.subject = 'Please select a subject';
    if (!formData.message.trim()) errors.message = 'Please provide project details';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  const faqs = [
    { 
      question: "What is Simple. H-O-C?", 
      answer: "Simple. H-O-C is a digital solutions company focused on innovation and growth, delivering tailored strategies that help businesses thrive in the digital landscape." 
    },
    { 
      question: "What makes you different from other agencies?", 
      answer: "We provide personalized, people-first strategies that scale with your business. Our approach combines deep industry expertise with cutting-edge technology to deliver measurable results." 
    },
    { 
      question: "What services do you offer?", 
      answer: "We offer comprehensive digital transformation services including consulting, web development, mobile applications, UI/UX design, digital marketing, and technology integration solutions." 
    },
    { 
      question: "How do you approach a new project?", 
      answer: "We follow a structured process: discovery phase to understand your needs, strategic planning, collaborative design and development, rigorous testing, and ongoing support post-launch." 
    },
    { 
      question: "Who do you work with?", 
      answer: "We partner with startups, SMEs, and enterprises across various industries including healthcare, finance, retail, education, and technology sectors." 
    },
  ];

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industry Experts" },
    { value: "5+", label: "Years Experience" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-badge mb-3">
                <span>Let's Connect</span>
              </div>
              <h1 className="hero-title">Ready to Transform Your Digital Presence?</h1>
              <p className="hero-subtitle">
                Let's discuss how we can help your business grow with innovative digital solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stat-card text-center">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-3 col-md-6">
              <div className="contact-card h-100">
                <div className="card-icon email-icon">
                  <Mail size={24} />
                </div>
                <h3 className="card-title">Email Us</h3>
                <a href="mailto:info@simple.co.za" className="card-link">
                  info@simple.co.za
                </a>
                <p className="card-description">We typically respond within 24 hours</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-card h-100">
                <div className="card-icon phone-icon">
                  <Phone size={24} />
                </div>
                <h3 className="card-title">Call Us</h3>
                <a href="tel:+27000000000" className="card-link">
                  +27 00 000 0000
                </a>
                <p className="card-description">Mon-Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-card h-100">
                <div className="card-icon location-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="card-title">Location</h3>
                <p className="card-text mb-0">Braamfontein, South Africa</p>
                <p className="card-description">Serving clients globally</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-card h-100">
                <div className="card-icon hours-icon">
                  <Clock size={24} />
                </div>
                <h3 className="card-title">Business Hours</h3>
                <p className="card-text mb-0">Mon - Fri<br />9:00 AM - 5:00 PM</p>
                <p className="card-description">SAST Time Zone</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-wrapper card shadow-lg border-0">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h2 className="form-title">Start Your Project</h2>
                    <p className="form-subtitle">Tell us about your vision and let's make it reality</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className={`form-control form-control-lg ${formErrors.firstName ? 'is-invalid' : ''}`}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                        />
                        {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className={`form-control form-control-lg ${formErrors.lastName ? 'is-invalid' : ''}`}
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                        />
                        {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={`form-control form-control-lg ${formErrors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`form-control form-control-lg ${formErrors.phone ? 'is-invalid' : ''}`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+27 00 000 0000"
                        />
                        {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="company" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <select
                          className={`form-select form-select-lg ${formErrors.subject ? 'is-invalid' : ''}`}
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Project Details *
                        </label>
                        <textarea
                          className={`form-control form-control-lg ${formErrors.message ? 'is-invalid' : ''}`}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                        ></textarea>
                        {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                      </div>

                      <div className="col-12 text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg submit-btn px-5"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={20} className="me-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2>Why Partner With Us</h2>
              <p className="lead">We deliver exceptional digital experiences that drive real business results</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon expertise">
                  <Users size={32} />
                </div>
                <h3>Expert Team</h3>
                <p>Our specialists bring years of industry experience and technical expertise to every project.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon strategy">
                  <Target size={32} />
                </div>
                <h3>Strategic Approach</h3>
                <p>We develop customized strategies aligned with your business goals and target audience.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="value-card text-center">
                <div className="value-icon results">
                  <Zap size={32} />
                </div>
                <h3>Proven Results</h3>
                <p>We measure success by the tangible business outcomes we deliver for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <div className="faq-icon-wrapper mx-auto mb-3">
                  <MessageCircle size={32} />
                </div>
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <p className="faq-subtitle">Get quick answers to common questions about our services</p>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item faq-item">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button faq-question-btn ${faqOpen === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={faqOpen === index}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                      </button>
                    </h3>
                    <div className={`accordion-collapse collapse ${faqOpen === index ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="faq-answer mb-0">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5">
                <div className="faq-support-box p-4 rounded">
                  <h3 className="support-title">Still have questions?</h3>
                  <p className="support-text mb-3">We're here to help! Reach out to us directly.</p>
                  <a
                    href="mailto:info@simple.co.za"
                    className="btn btn-outline-primary"
                  >
                    <Mail size={16} className="me-2" />
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;