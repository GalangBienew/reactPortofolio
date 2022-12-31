import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";

const NavbarG = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src="https://th.bing.com/th/id/OIP.FO9H1qwPuoXxvM61XLGViAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="image brand"
                width={"50px"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* react router this here */}
                  <LinkContainer to="/Headerthis">
                    <Nav.Link>Headerthis</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Contactus">
                    <Nav.Link>Contactus</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="/project">
                      <NavDropdown.Item>Project</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarG;
