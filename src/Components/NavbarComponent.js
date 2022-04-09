import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import logo from '../Images/Logo.svg'
import "./Components.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "../Pages/ServicesPage";
import SponsorsPage from "../Pages/SponsorsPage";
import { NavHashLink } from 'react-router-hash-link';
import { HashLink } from 'react-router-hash-link';




export default function NavbarComponent() {
  return (
    <>
    <BrowserRouter>
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
                  <HashLink  to="/#services" className="navLinkTxt ">Services</HashLink>
                  <HashLink  to="/#sponsors" className="">Sponsors</HashLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Routes>
        <Route  id="services" element={<ServicesPage />} />
        <Route  id="sponsors" element={<SponsorsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
