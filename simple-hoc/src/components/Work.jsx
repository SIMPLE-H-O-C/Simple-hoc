import { Link } from "react-router-dom";
import "../styles/Work.css";

export default function Work() {
  return (
    <section id="work" className="work-section">
      <h2 className="work-section-title">OUR WORK</h2>

      <div className="work-video-wrapper">
        <video autoPlay muted loop playsInline>
          <source
            src="/images/Work/Xiaomi Video - Made with Clipchamp.mp4"
            type="video/mp4"
          />
          <source
            src="/images/Work/Xiaomi Video - Made with Clipchamp.webm"
            type="video/webm"
          />
          <source
            src="/images/Work/Xiaomi Video - Made with Clipchamp.ogg"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="work-button-wrapper">
        <Link to="/gallery" className="btn">
          See More →
        </Link>
      </div>
    </section>
  );
}
