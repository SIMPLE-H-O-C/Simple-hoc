// src/components/Navbar.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState, useRef } from "react";
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
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;

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

      const navbarCollapse = document.getElementById("navbarNav");
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse && navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse && navbarCollapse.classList.contains("show")) {
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light custom-navbar sticky-top ${
        scrollDirection === "down" ? "hide-navbar" : ""
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => handleScrollClick(e, "home")}
        >
          <img src={logo} alt="SIMPLE. H-O-C" className="navbar-logo" />
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
                    onClick={(e) => handleScrollClick(e, id)}
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
