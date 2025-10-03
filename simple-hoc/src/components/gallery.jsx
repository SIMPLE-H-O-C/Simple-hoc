import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/gallery.css";

const videos = [
  {
    src: "/images/Work/Redmi.mp4",
    thumb: "/images/Work/Redmi-Thumbnail.png",
    desc: "Redmi Campaign Video",
  },
  {
    src: "/images/Work/Xiaomi Video - Made with Clipchamp.mp4",
    thumb: "/images/Work/xiaomi-Thumbnail.png",
    desc: "Xiaomi Ad Campaign",
  },
  {
    src: "/images/Work/thebtsas_60970913.mp4",
    thumb: "/images/Work/BTS-Thumbnail.png",
    desc: "Behind the Scenes",
  },
  {
    src: "/images/Work/OOR.mp4",
    thumb: "/images/Work/OOR-Thumbnail.png",
    desc: "OOR Creative Video",
  },
];

const images = [
  { src: "/images/Work/tebomametja_268154170.jpg", desc: "Creative photo 1" },
  { src: "/images/Work/tebomametja_268154206.jpg", desc: "Creative photo 2" },
  { src: "/images/Work/tebomametja_268154243.jpg", desc: "Creative photo 3" },
  { src: "/images/Work/tebomametja_268154048.jpg", desc: "Creative photo 4" },
  { src: "/images/Work/tebomametja_268154283.jpg", desc: "Creative photo 5" },
  { src: "/images/Work/tebomametja_268154317.jpg", desc: "Creative photo 6" },
  { src: "/images/Work/tebomametja_268154347.jpg", desc: "Creative photo 7" },
];

const Gallery = () => {
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  const items = [];
  let imgIndex = 0;
  let vidIndex = 0;

  while (imgIndex < images.length || vidIndex < videos.length) {
    for (let i = 0; i < 2 && imgIndex < images.length; i++) {
      items.push({
        original: images[imgIndex].src,
        thumbnail: images[imgIndex].src,
        description: images[imgIndex].desc,
        type: "image",
      });
      imgIndex++;
    }
    if (vidIndex < videos.length) {
      items.push({
        original: videos[vidIndex].src,
        thumbnail: videos[vidIndex].thumb,
        description: videos[vidIndex].desc,
        type: "video",
      });
      vidIndex++;
    }
  }

  const renderItem = (item) => {
    if (item.type === "video") {
      return (
        <div className="media-wrap">
          <video
            className="gallery-video"
            src={item.original}
            controls
            muted
            playsInline
            preload="metadata"
            poster={item.thumbnail}
          />
          {item.description && (
            <div className="media-caption">{item.description}</div>
          )}
        </div>
      );
    }
    return (
      <div className="media-wrap">
        <img
          className="gallery-image"
          src={item.original}
          alt={item.description}
        />
        {item.description && (
          <div className="media-caption">{item.description}</div>
        )}
      </div>
    );
  };

  const onSlide = () => {
    const videos = document.querySelectorAll(".image-gallery-slide video");
    videos.forEach((v) => v.pause());
  };

  return (
    <div className="gallery-container fullscreen">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <ImageGallery
        ref={galleryRef}
        items={items}
        renderItem={renderItem}
        showThumbnails={true}
        thumbnailPosition="bottom"
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={false}
        onSlide={onSlide}
        showNav={true}
        additionalClass="custom-image-gallery"
      />
    </div>
  );
};

export default Gallery;
