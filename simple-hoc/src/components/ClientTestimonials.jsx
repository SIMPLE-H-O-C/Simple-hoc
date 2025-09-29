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

// Custom arrow SVGs
const prevArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c07a00" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 7.5H14.5a.5.5 0 0 1 .5.5z"/>
  </svg>
);

const nextArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#c07a00" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">OUR CLIENTS SAY</h2>

        <Carousel
          indicators={false}
          controls={true}
          fade={true}
          interval={4000}
          className="testimonial-carousel"
          prevIcon={prevArrow}
          nextIcon={nextArrow}
        >
          {testimonials.map((t) => (
            <Carousel.Item key={t.id}>
              <div className="testimonial-slide">
                {/* Image container */}
                <div className="image-container">
                  <img src={t.image} alt={t.name} className="client-img" />
                </div>

                <div className="testimonial-box">
                  <p className="quote">"{t.text}"</p>
                  <hr className="separator" />
                  <p className="client-name">
                    {t.name}, <span className="role">{t.role}</span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
