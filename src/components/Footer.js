import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 

export const Footer = () => {
  const message = "Hello Kelvin, hope you are well. I'd like to connect with you more. Reach out when available.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <footer id="footer" className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end"> {/* Added text-center class */}
            <div className="social-icon">
              <a href={`https://www.linkedin.com/in/kelvin-mue-6a4802208/`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={`https://wa.me/+254712680703?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href={`mailto:kelvinmue@gmail.com?subject=Connection Request&body=${encodedMessage}`} target="blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
