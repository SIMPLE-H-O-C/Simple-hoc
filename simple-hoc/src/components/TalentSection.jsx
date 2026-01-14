import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/Talent.css";

const TalentSection = () => {
  const talents = [
    {
      role: "Photographer • Videographer • Director",
      name: "Tebogo Mametja",
      email: "bookings@simple-hoc.co.za",
      img: "/images/talent/talent1.1.jpeg",
      hoverImg: "/images/talent/talent1.2.jpeg",
      socials: {
        facebook: "https://www.facebook.com/Tebz06?mibextid=LQQJ4d",
        instagram: "https://www.instagram.com/tebomametja/",
        twitter: "https://x.com/tebomametja",
        tiktok: "https://www.tiktok.com/@tebomametja",
      },
    },
    {
      role: "Actor • Brand Ambassador • Host",
      name: "Juicy Jay",
      email: "bookings@simple-hoc.co.za",
      img: "/images/talent/talent2.1.jpg",
      hoverImg: "/images/talent/talent2.2.jpg",
      socials: {
        facebook:
          "https://www.facebook.com/people/Juicy-Jay-Official/100089195547014/?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/juicyjay_official/",
        twitter: "https://x.com/juicyjay_siya?s=21&t=bCu18robNUh3Ywh3xg5g2w",
        tiktok: "https://www.tiktok.com/@juicyjay_siya?_t=8attoqvkzs5&_r=1",
        youtube: "https://www.youtube.com/@juicyjaysiya",
      },
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
            At Simple. H-O-C, we don’t just manage talent — we nurture it. Our
            creatives are handpicked for their passion, performance, and
            potential. Whether you’re looking to book a headline act, capture
            stunning visuals, or collaborate on a creative campaign, our talent
            brings energy, excellence, and authenticity.
          </p>
        </div>

        {/* Talent Grid */}
        <Row className="justify-content-center">
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

                      {/* Socials */}
                      <div className="mt-3">
                        {talent.socials.facebook && (
                          <a
                            href={talent.socials.facebook}
                            className="me-3 social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        )}
                        {talent.socials.twitter && (
                          <a
                            href={talent.socials.twitter}
                            className="me-3 social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-x-twitter"></i>
                          </a>
                        )}
                        {talent.socials.instagram && (
                          <a
                            href={talent.socials.instagram}
                            className="me-3 social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        )}
                        {talent.socials.tiktok && (
                          <a
                            href={talent.socials.tiktok}
                            className="me-3 social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-tiktok"></i>
                          </a>
                        )}
                        {talent.socials.youtube && (
                          <a
                            href={talent.socials.youtube}
                            className="me-3 social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        )}
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
