import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import CalaverasCommunityLogo from '../Images/Calaveras Community Foundation Logo@3x.png'
import DignityHealthLogo from '../Images/Dignity Health Logo@3x.png'
import PhinellsLogo from '../Images/Pinnells Logo@3x.png'
import TacoBellLogo from '../Images/editedTB.png'
import SierraPacificLogo from '../Images/Sierra Pacific Logo@3x.png'
import CalaverasLogo from '../Images/Calaveras Logo@3x.png'
import './Sponsors.css'
export default function SponsorsPage() {
  return (
    <Row className="justify-content-center mt-5 mb-5">
      <Col xs={12} md={10}lg={9}>
        <p className="m-0"><strong>Sponsors</strong></p>
        <p className="">Thank you to our sponsors!</p>
        <Row xs={1} md={2} lg={6} className="mt-2 sponsorRow justify-content-center">
          <Col xs={5} md={3}>
            <img className="sponsorImg" src={CalaverasCommunityLogo}/>
          </Col>
          <Col xs={8} md={5}>
            <img className="sponsorImg dignityLogo img-fluid" src={DignityHealthLogo}/>
          </Col>
          <Col xs={6} md={3}>
            <img className="sponsorImg img-fluid" src={PhinellsLogo}/>
          </Col>
          <Col xs={7} md={3}>
            <img className="sponsorImg img-fluid" src={TacoBellLogo}/>
          </Col>
          <Col xs={7} md={4}>
            <img className="sponsorImg sierraLogo img-fluid" src={SierraPacificLogo}/>
          </Col>
          <Col xs={6} md={3}>
            <img className="sponsorImg img-fluid" src={CalaverasLogo}/>
          </Col>
        </Row>
      </Col>

    </Row>
  )
}
