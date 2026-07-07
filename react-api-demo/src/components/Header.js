import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { BsHouse, BsPersonCircle, BsGear } from "react-icons/bs";

function Header() {
  return (
    <Navbar bg="primary" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white">
          <BsPersonCircle className="me-2" />
          MY APP
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white me-3">
              <BsHouse className="me-1" />
              Home
            </Nav.Link>

            <Nav.Link href="#link" className="text-white me-3">
              Link
            </Nav.Link>

            <NavDropdown title={<><BsGear className="me-1" /> Options</>} id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item href="#action/3.1">
                Option 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Option 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More Options
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;