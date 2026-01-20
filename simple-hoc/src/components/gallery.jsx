import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../styles/gallery.css";

const works = [
  {
    type: "video",
    src: "/images/Work/Redmi.mp4",
    title: "Xiaomi Redmi Note Campaign",
    client: "Xiaomi South Africa",
    talent: "Tebogo Mametja",
    producer: "Mpho Ngoepe",
    production: "Yarona Motion Pictures",
  },
  {
    type: "video",
    src: "/images/Work/JuicyJay-Gillette.mp4",
    title: "Gillette Campaign",
    client: "Gillette South Africa",
    talent: "Siyamthanda 'Juicy Jay' Jwacu",
  },
  {
    type: "image",
    src: "/images/Work/tebomametja_268154317.jpg",
    title: "Redmi Editoral Shoot",
    client: "Xiaomi South Africa",
    talent: "Tebogo Mametja",
    producer: "Mpho Ngoepe",
    production: "Yarona Motion Pictures",
  },
  {
    type: "video",
    src: "/images/Work/JuicyJay-CocaColaBok.mp4",
    title: "Coca-Cola #BeABok Campaign",
    client: "Coca-Cola South Africa",
    talent: "Siyamthanda 'Juicy Jay' Jwacu",
  },
  {
    type: "video",
    src: "/images/Work/Xiaomi Video - Made with Clipchamp.mp4",
    title: "Xiaomi Redmi Note 14 Series – TVC",
    client: "Xiaomi South Africa",
    talent: "Tebogo Mametja",
    productionmanager: "Mpho Ngoepe",
    production: "Yarona Motion Pictures",
  },
  {
    type: "video",
    src: "/images/Work/JuicyJay-CocaCola.mp4",
    title: "Coca-Cola #BeABok Campaign",
    client: "Coca-Cola South Africa",
    talent: "Siyamthanda 'Juicy Jay' Jwacu",
  },
  {
    type: "video",
    src: "/images/Work/thebtsas_60970913.mp4",
    title: "Behind The Scenes Awards – 1st Annual Award Ceremony",
    client: "Charlie Communications",
    talent: "Mpho Ngoepe",
  },
  {
    type: "video",
    src: "/images/Work/OOR.mp4",
    title: "OOR Creative Video",
    client: "OOR",
    talent: "OOR Production",
  },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="work-scroll-page">
        <Container>
          <Row>
            {works.map((work, index) => (
              <Col lg={6} md={12} className="mb-4" key={index}>
                <Card className="border-0 work-card h-100">
                  <Row className="g-0 work-card-row">
                    <Col md={6} className="work-media-wrapper">
                      {work.type === "video" ? (
                        <video
                          src={work.src}
                          controls
                          muted
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img src={work.src} alt={work.title} />
                      )}
                    </Col>

                    <Col md={6} className="work-info">
                      <Card.Body>
                        <h5 className="work-title">{work.title}</h5>
                        <p>
                          <strong>Client:</strong> {work.client}
                        </p>
                        <p>
                          <strong>Talent:</strong> {work.talent}
                        </p>

                        {[
                          { label: "Producer", value: work.producer },
                          { label: "Production", value: work.production },
                          {
                            label: "Production Manager",
                            value: work.productionmanager,
                          },
                        ].map(
                          (item, idx) =>
                            item.value && (
                              <p key={idx}>
                                <strong>{item.label}:</strong> {item.value}
                              </p>
                            ),
                        )}
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Gallery;
