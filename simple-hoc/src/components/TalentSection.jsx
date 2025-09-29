import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/Talent.css";

const TalentSection = () => {
  const talents = [
    {
      role: "Photographer",
      name: "Tebogo Mametja",
      email: "bookings@tribeshed.co.za",
      phone: "123-456-7890",
      img: "/images/talent1.1.jpeg",
      hoverImg: "/images/talent1.2.jpeg",
    },
    {
      role: "Tech Lead",
      name: "Don Francis",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "/images/talent 2.1.png",
      hoverImg: "/images/talent 2.2.png",
    },
    {
      role: "Designer",
      name: "Taylor Smith",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "/images/talent 3.1.png",
      hoverImg: "/images/talent 3.2.png",
    },
    {
      role: "Photographer",
      name: "Alex Johnson",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "/images/talent 4.1.png",
      hoverImg: "/images/talent 4.2.png",
    },
    {
      role: "Producer",
      name: "Maria Lopez",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "/images/talent 5.1.png",
      hoverImg: "/images/talent 5.2.png",
    },
    {
      role: "Marketing Lead",
      name: "James Carter",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "/images/talent 6.1.png",
      hoverImg: "/images/talent 6.2.png",
    },
  ];

  return (
    <section id="talent" className="talent-section">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="talent-title">TALENT</h1>
          <h5>Dedication. Expertise. Passion.</h5>
          <p className="talent-description">
            At Simple. H.O.C, we don’t just manage talent — we nurture it. Our
            creatives are handpicked for their passion, performance, and
            potential. Whether you’re looking to book a headline act, capture
            stunning visuals, or collaborate on a powerful campaign, our talent
            brings energy, excellence, and authenticity.
          </p>
        </div>

        {/* Talent Grid */}
        <Row>
          {talents.map((talent, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 talent-card">
                <Row className="g-0 talent-card-row">
                  {/* Image Wrapper */}
                  <Col md={6} className="talent-img-wrapper">
                    <Card.Img
                      src={talent.img}
                      alt={talent.name}
                      className="talent-img default-img"
                    />
                    {talent.hoverImg && (
                      <Card.Img
                        src={talent.hoverImg}
                        alt={`${talent.name} Hover`}
                        className="talent-img hover-img"
                      />
                    )}
                  </Col>

                  {/* Info */}
                  <Col md={6} className="talent-info">
                    <Card.Body>
                      <p className="talent-role">{talent.role}</p>
                      <h5 className="talent-name">{talent.name}</h5>
                      <p className="talent-contact">{talent.email}</p>
                      <p className="talent-contact">{talent.phone}</p>

                      {/* Socials */}
                      <div className="mt-3">
                        <a href="#" className="me-3 social-link">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-3 social-link">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-link">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TalentSection;
