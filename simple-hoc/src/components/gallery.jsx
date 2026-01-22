import React, { useEffect } from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
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
    title: "Gillette #Fusion5 Pro Campaign",
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
    title: "BTS Awards - 1st Annual Award Ceremony",
    client: "Charlie Communications",
    talent: "Mpho Ngoepe",
  },
  {
    type: "video",
    src: "/images/Work/OOR.mp4",
    title: "OOR Outdoor Experience",
    client: "OOR Music",
    stagemanager: "Mpho Ngoepe",
  },
  {
    type: "carousel",
    images: [
      "/images/Work/SupersportsHope.jpg",
      "/images/Work/SupersportsHope1.jpg",
      "/images/Work/SupersportsKriya.jpg",
      "/images/Work/SupersportsKriya1.jpg",
      "/images/Work/SupersportsNqobile.jpg",
      "/images/Work/SupersportsNqobile1.jpg",
      "/images/Work/SupersportsVanes.jpg",
      "/images/Work/SupersportsVanes1.jpg",
    ],
    title: "SuperSports Disruptors Campaign",
    client: "SuperSports",
    talent: "Tebogo Mametja",
    productionmanager: "Mpho Ngoepe",
    agency: "Culture Collector",
    production: "Yarona Motion Pictures",
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
                      {work.type === "video" && (
                        <video
                          src={work.src}
                          controls
                          muted
                          playsInline
                          preload="metadata"
                        />
                      )}

                      {work.type === "image" && (
                        <img src={work.src} alt={work.title} />
                      )}

                      {work.type === "carousel" && (
                        <Carousel indicators controls interval={3000}>
                          {work.images.map((img, idx) => (
                            <Carousel.Item key={idx}>
                              <img src={img} alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      )}
                    </Col>

                    <Col md={6} className="work-info">
                      <Card.Body>
                        <h5 className="work-title">{work.title}</h5>
                        <p>
                          <strong>Client:</strong> {work.client}
                        </p>

                        {[
                          { label: "Talent", value: work.talent },
                          { label: "Producer", value: work.producer },
                          { label: "Production", value: work.production },
                          { label: "Stage Manager", value: work.stagemanager },
                          { label: "Agency", value: work.agency },
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
