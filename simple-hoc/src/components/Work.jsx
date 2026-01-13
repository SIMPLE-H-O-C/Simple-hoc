import { Link } from "react-router-dom";
import "../styles/Work.css";

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-left">
        <h2>OUR WORK</h2>
        <Link to="/gallery" className="btn">
          See More →
        </Link>
      </div>

      <div className="work-right">
        <div className="featured-video">
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
      </div>
    </section>
  );
}
