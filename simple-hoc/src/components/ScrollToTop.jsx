import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-warning position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          }}
        >
          ^
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
