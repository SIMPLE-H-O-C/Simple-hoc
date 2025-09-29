// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import logo from "../assets/log.png"; 

const Navbar = () => {
  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Work",
    "Talent",
    "Testimonials",
    "Contact",
  ];
  const [active, setActive] = useState("home");

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "");
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Smooth scroll
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
      
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
        >
          <img
            src={logo}
            alt="SIMPLE. H-O-C"
            className="navbar-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "");
              return (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link ${
                      active === id ? "active-link" : ""
                    }`}
                    href={`#${id}`}
                    onClick={(e) => handleScroll(e, id)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
