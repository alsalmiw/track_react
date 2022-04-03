import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CalaverasLogo from '../Images/Calaveras Logo@3x.png'
import "./Components.css"

export default function FooterComponent() {
  return (
    <Row className="footerBg pt-4 pb-3 justify-content-center">
      <Col xs={12} md={9}>
        <Container className="d-flex">
          <Col xs={12} md={7} lg={5}className="d-flex">
            <img className="calLogo" src={CalaverasLogo} />
            <p className="footerTxt pt-1">On the right track is a product of the Calaveras Chamber of Commerce. All rights reserved.</p>
          </Col>
        </Container>
      </Col>

    </Row>
  )
}
