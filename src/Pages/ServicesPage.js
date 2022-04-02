import React from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ServiceComponent from "../Components/ServiceComponent";
import { Container, Row, Col, Form, FormControl, InputGroup } from "react-bootstrap";


export default function ServicesPage() {
  return (
    <Container className="services-container" fluid>
      <Container>
      <Row>
        <h2>Services</h2>
      </Row>
      <Row>
        <p>Select a service to view more information.</p>
      </Row>
      <Row>
      <InputGroup className="mb-3 search-bar">
    <InputGroup.Text className="search-icon"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
    <FormControl
      className="search-bar"
      placeholder="Search for services... "
      aria-label="Search"
    />
  </InputGroup>
      </Row>
      <Row>
      <ServiceComponent />
      </Row>
      </Container>
    </Container>
  );
}
