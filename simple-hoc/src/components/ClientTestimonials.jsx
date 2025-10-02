import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/xiaomi.webp",
    text: "A great testimonial can boost your brand’s image. Click to edit and add your own.",
    name: "Xiaomi",
    role: "Tech Lead",
  },
  {
    id: 2,
    image: "/images/testimonials/supersport.webp",
    text: "Working with this team has been a fantastic experience!",
    name: "SuperSport",
    role: "Marketing Director",
  },
  {
    id: 3,
    image: "/images/testimonials/bar-one.png",
    text: "Their attention to detail and professionalism exceeded expectations.",
    name: "Bar-One",
    role: "Product Manager",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">OUR CLIENTS SAY</h2>

        <Carousel
          indicators={false}
          controls={true}
          fade={true}
          interval={3000}
          className="testimonial-carousel"
        >
          {testimonials.map((t) => (
            <Carousel.Item key={t.id}>
              <blockquote className="testimonial-block text-center mx-auto">
                {/* Decorative quote mark */}
                <svg
                  className="quote-icon mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 13"
                  width="50"
                  height="40"
                >
                  <path
                    d="M7.2 9.3c0 .8-.3 1.5-.8 2-.5.5-1.1.8-1.9.8-1 0-1.8-.3-2.4-1C1.6 10.4 1.3 9.5 1.3 8.3c0-1.2.3-2.4 1-3.5C3 3.6 4 2.7 5.2 2L6.1 3.4C5.4 3.9 4.9 4.4 4.6 5c-.3.6-.5 1.3-.6 2 .3-.1.6-.2 1-.2.7 0 1.3.2 1.7.6.5.5.7 1.1.7 1.9zM14.2 9.3c0 .8-.3 1.5-.8 2-.5.5-1.1.8-1.9.8-1 0-1.8-.3-2.4-1-.6-.6-.9-1.5-.9-2.7 0-1.2.3-2.4 1-3.5 1-1.1 2-2 3.2-2.7l.9 1.4c-.7.5-1.2 1-1.6 1.6-.4.6-.6 1.3-.7 2 .3-.1.6-.2 1-.2.7 0 1.3.2 1.7.6.5.5.7 1.1.7 1.9z"
                    fill="currentColor"
                  />
                </svg>

                {/* Testimonial text */}
                <p className="testimonial-text">
                  <em>"{t.text}"</em>
                </p>

                {/* Client Info */}
                <footer className="mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="client-img mb-3"
                  />
                  <div className="client-name">{t.name}</div>
                  <div className="client-role">{t.role}</div>
                </footer>
              </blockquote>            
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Clients Logos */}
        <div className="clients-logos d-flex flex-wrap justify-content-center align-items-center gap-4">
          {testimonials.map((t) => (
            <img
              key={t.id}
              src={t.image}
              alt={`${t.name} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
