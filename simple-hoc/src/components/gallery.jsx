import React from "react";
import "../styles/gallery.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videoFiles = [
  "/images/Work/Redmi.mp4",
  "/images/Work/Xiaomi Video - Made with Clipchamp.mp4",
  "/images/Work/thebtsas_60970913.mp4",
  "/images/Work/OOR.mp4",
];

const imageFiles = [
  "/images/Work/tebomametja_268154170.jpg",
  "/images/Work/tebomametja_268154206.jpg",
  "/images/Work/tebomametja_268154243.jpg",
  "/images/Work/tebomametja_268154048.jpg",
  "/images/Work/tebomametja_268154283.jpg",
  "/images/Work/tebomametja_268154317.jpg",
  "/images/Work/tebomametja_268154347.jpg",
];

const Gallery = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="gallery-title">
        <h2>Our Creative Work</h2>
        <p>A showcase of our video campaigns and photography projects.</p>
      </div>

      <div className="video-grid">
        {videoFiles.map((video, index) => (
          <video key={index} controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      <Slider {...settings}>
        {imageFiles.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
