import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTwitter, BsEnvelope } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h5 className="text-primary mb-3">React API Demo</h5>
            <p className="text-muted">
              Ứng dụng demo về React Hooks, API fetching, và React Bootstrap.
            </p>
            <p className="text-muted small">
              <strong>Kỹ thuật sử dụng:</strong> React, axios, Bootstrap, React Bootstrap
            </p>
          </Col>
          <Col md={6}>
            <h5 className="text-primary mb-3">Liên hệ</h5>
            <div className="d-flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none" 
                title="GitHub"
              >
                <BsGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none" 
                title="LinkedIn"
              >
                <BsLinkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none" 
                title="Twitter"
              >
                <BsTwitter size={24} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-light text-decoration-none" 
                title="Email"
              >
                <BsEnvelope size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              &copy; {currentYear} React API Demo. Hanoi, Vietnam. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;