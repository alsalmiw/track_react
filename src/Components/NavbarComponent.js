import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import logo from '../Images/Logo.svg'
import "./Components.css"


export default function NavbarComponent() {
  return (
    <>
    <Row className="justify-content-center">
      <Col xs={12} md={9}>
        <Navbar bg="" expand="lg">
          <Container fluid>
            <Navbar.Brand >
              <img src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="">
                <Nav.Link href="#home" className="navLinkTxt ">Services</Nav.Link>
                <Nav.Link href="#link" className="">Sponsors</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
    </>
  );
}
