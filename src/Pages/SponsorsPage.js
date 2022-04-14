import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import CalaverasCommunityLogo from '../Images/Calaveras Community Foundation Logo@3x.png'
import DignityHealthLogo from '../Images/Dignity Health Logo@3x.png'
import PhinellsLogo from '../Images/Pinnells Logo@3x.png'
import TacoBellLogo from '../Images/editedTB.png'
import SierraPacificLogo from '../Images/Sierra Pacific Logo@3x.png'
import GurnickLogo from '../Images/Gurnick Academy@3x.png'
import './Sponsors.css'
export default function SponsorsPage() {
  return (
    <Row className="justify-content-center mt-5 mb-5" id="sponsors">
      <Col xs={12} md={10}lg={9}>
        <h2 className="m-md-0 boldTxt">Sponsors</h2>
        <h3 className="boldTxt">Thank you to our sponsors!</h3>
        <Row xs={1} sm={3} md={3} lg={6} className="mt-2 sponsorRow justify-content-center">
          <Col>
            <img className="sponsorImg" src={CalaverasCommunityLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg dignityLogo" src={DignityHealthLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg phinellsLogo" src={PhinellsLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg" src={TacoBellLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg sierraLogo" src={SierraPacificLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg" src={GurnickLogo}/>
          </Col>
        </Row>
      </Col>

    </Row>
  )
}
