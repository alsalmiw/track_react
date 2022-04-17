import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import logo from '../Images/Logo1.svg'
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
        <Col xs={12} md={10}lg={9}>
          <Navbar bg="" expand="lg">
            <Container>
              <Navbar.Brand >
                <img alt="On The Right Track Logo" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="">
                  <HashLink  to="/#services" className="navLinkTxt marginRight">Services</HashLink>
                  <HashLink  to="/#sponsors" className="navLinkTxt">Sponsors</HashLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Routes>
        <Route path="/#services" id="/#services" element={<ServicesPage />} />
        <Route path="/#sponsors" id="/#sponsors" element={<SponsorsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
