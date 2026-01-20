import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/xiaomi.webp",
    text: "The team’s creativity, efficiency, and attention to detail were outstanding. Working with them was a seamless and highly professional experience.",
    name: "Xiaomi",
    role: "Head of Marketing",
  },
  {
    id: 2,
    image: "/images/testimonials/monate_africa.webp",
    text: "Mpho Ngoepe demonstrated exceptional professionalism, leadership, and attention to detail as Production Manager for the Naledi Film Festival. Her ability to manage logistics and deliver under pressure made her an invaluable part of the team.",
    name: "Monate Africa",
    role: "CEO & Founder",
  },
  {
    id: 3,
    image: "/images/testimonials/behind_the_scenes.webp",
    text: "The team carried our event from onboarding through to the final debrief with exceptional dedication. Their commitment and professionalism ensured a successful event from start to finish.",
    name: "Behind The Scenes Awards",
    role: "Executive Founder",
  },
];

const clients = [
  { id: 1, name: "Xiaomi", image: "/images/testimonials/xiaomi.webp" },
  { id: 2, name: "SuperSport", image: "/images/testimonials/supersport.webp" },
  { id: 3, name: "Bar-One", image: "/images/testimonials/bar-one.png" },
  {
    id: 4,
    name: "Monate Africa",
    image: "/images/testimonials/monate_africa.webp",
  },
  { id: 5, name: "Coca-Cola", image: "/images/testimonials/coca_cola.png" },
  { id: 6, name: "Gillette", image: "/images/testimonials/gillette.png" },
  {
    id: 7,
    name: "Behind the Scenes Awards",
    image: "/images/testimonials/behind_the_scenes.webp",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">OUR CLIENTS SAY</h2>

        <Carousel
          fade
          interval={4500}
          pause={false}
          indicators={false}
          controls
          className="testimonial-carousel carousel-fade"
        >
          {testimonials.map((t) => (
            <Carousel.Item key={t.id}>
              <div className="testimonial-card text-center">
                {/* Top: Logo */}
                <div className="testimonial-header">
                  <img src={t.image} alt={t.name} className="client-img" />
                </div>

                {/* Middle: Text */}
                <div className="testimonial-body">
                  <p className="testimonial-text">
                    <em>"{t.text}"</em>
                  </p>
                </div>

                {/* Bottom: Client info */}
                <div className="testimonial-footer">
                  <div className="client-name">{t.name}</div>
                  <div className="client-role">{t.role}</div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Clients Logos */}
        <div className="clients-logos">
          {clients.map((c) => (
            <img
              key={c.id}
              src={c.image}
              alt={`${c.name} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
