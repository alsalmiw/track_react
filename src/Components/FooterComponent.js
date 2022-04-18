import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CalaverasLogo from '../Images/Calaveras Logo@3x.png'
import "./Components.css"

export default function FooterComponent() {
  return (
    <Row className="footerBg pt-4 pb-3 hiddenOverflow">
      <Col xs={12} md={10} lg={9}>
        <Row className="d-flex mx-lg-2 mx-3">
          <Col xs={12} md={7} lg={5}className="d-flex offset-lg-2 offset-md-1">
            <img className="calLogo" alt="Calaveras Logo" src={CalaverasLogo} />
            <p className="footerTxt pt-1">On the right track is a product of the Calaveras Chamber of Commerce. All rights reserved.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
