import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const TalentSection = () => {
  const talents = [
    {
      role: "Art Director",
      name: "Ashley Jones",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
    {
      role: "Tech Lead",
      name: "Don Francis",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
    {
      role: "Designer",
      name: "Taylor Smith",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
    {
      role: "Photographer",
      name: "Alex Johnson",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
    {
      role: "Producer",
      name: "Maria Lopez",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
    {
      role: "Marketing Lead",
      name: "James Carter",
      email: "info@mysite.com",
      phone: "123-456-7890",
      img: "https://placehold.co/300x300",
    },
  ];

  return (
    <section style={{ backgroundColor: "#222", color: "white", padding: "60px 0" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 style={{ fontWeight: "bold", letterSpacing: "2px" }}>TALENT</h1>
          <p>Dedication. Expertise. Passion.</p>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "16px", lineHeight: "1.6" }}>
            At Simple. H.O.C, we don’t just manage talent — we nurture it. Our creatives are
            handpicked for their passion, performance, and potential. Whether you’re looking to
            book a headline act, capture stunning visuals, or collaborate on a powerful campaign,
            our talent brings energy, excellence, and authenticity.
          </p>
        </div>

        {/* Talent Grid */}
        <Row>
          {talents.map((talent, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0">
                <Row className="g-0">
                  {/* Image */}
                  <Col md={6}>
                    <Card.Img
                      src={talent.img}
                      alt={talent.name}
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </Col>

                  {/* Info */}
                  <Col
                    md={6}
                    className="d-flex flex-column justify-content-center"
                    style={{ backgroundColor: "#555", color: "white", padding: "20px" }}
                  >
                    <Card.Body>
                      <p style={{ fontSize: "14px", marginBottom: "5px" }}>{talent.role}</p>
                      <h5 style={{ marginBottom: "15px" }}>{talent.name}</h5>
                      <p style={{ margin: "0" }}>{talent.email}</p>
                      <p style={{ margin: "0" }}>{talent.phone}</p>
                      {/* Socials */}
                      <div className="mt-3">
                        <a href="#" className="me-3 text-white">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-3 text-white">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white">
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
