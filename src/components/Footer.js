import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import the icons

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* Additional content can go here */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kelvin-mue-6a4802208/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/+254712680703" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="mailto:kelvinmue@gmail.com" target="blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
