import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";

const works = [
  {
    type: "video",
    src: "/images/Work/Redmi.mp4",
    title: "Redmi Campaign",
    client: "Xiaomi",
    talent: "Tebogo Mametja",
  },
  {
    type: "video",
    src: "images/Work/JuicyJay-Gillette.mp4",
    title: "Gillette Campaign",
    client: "Gillette",
    talent: "Juicy Jay",
  },
  {
    type: "image",
    src: "/images/Work/tebomametja_268154317.jpg",
    title: "Creative Photoshoot II",
    client: "Private Client",
    talent: "Tebogo Mametja",
  },
  {
    type: "video",
    src: "images/Work/JuicyJay-CocaColaBok.mp4",
    title: "Coca-Cola Campaign",
    client: "Coca-Cola",
    talent: "Juicy Jay",
  },
  {
    type: "video",
    src: "/images/Work/Xiaomi Video - Made with Clipchamp.mp4",
    title: "Xiaomi Ad Campaign",
    client: "Xiaomi",
    talent: "Tebogo Mametja",
  },
  {
    type: "video",
    src: "images/Work/JuicyJay-CocaCola.mp4",
    title: "Coca-Cola Campaign",
    client: "Coca-Cola",
    talent: "Juicy Jay",
  },
  {
    type: "video",
    src: "/images/Work/thebtsas_60970913.mp4",
    title: "Behind the Scenes",
    client: "Xiaomi",
    talent: "Tebogo Mametja",
  },
  {
    type: "video",
    src: "/images/Work/OOR.mp4",
    title: "OOR Creative Video",
    client: "OOR",
    talent: "Tebogo Mametja",
  },
  {
    type: "image",
    src: "/images/Work/tebomametja_268154243.jpg",
    title: "Creative Photoshoot",
    client: "Private Client",
    talent: "Tebogo Mametja",
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="work-scroll-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {works.map((work, index) => (
        <section className="work-scroll-item" key={index}>
          {/* LEFT INFO */}
          <div className="work-scroll-info">
            <h2>{work.title}</h2>
            <p>
              <strong>Client:</strong> {work.client}
            </p>
            <p>
              <strong>Talent:</strong> {work.talent}
            </p>
          </div>

          {/* RIGHT MEDIA */}
          <div className="work-scroll-media">
            {work.type === "video" ? (
              <video src={work.src} controls playsInline preload="metadata" />
            ) : (
              <img src={work.src} alt={work.title} />
            )}
          </div>

          {/* Divider line except after last item */}
          {index < works.length - 1 && <div className="media-divider"></div>}
        </section>
      ))}
    </div>
  );
};

export default Gallery;
