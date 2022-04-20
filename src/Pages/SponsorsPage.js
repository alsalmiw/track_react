import React from 'react'
import {Row, Col} from 'react-bootstrap'
import CalaverasCommunityLogo from '../Images/Calaveras Community Foundation Logo@3x.png'
import DignityHealthLogo from '../Images/Dignity Health Logo@3x.png'
import PhinellsLogo from '../Images/Pinnells Logo@3x.png'
import TacoBellLogo from '../Images/editedTB.png'
import SierraPacificLogo from '../Images/Sierra Pacific Logo@3x.png'
import GurnickLogo from '../Images/Gurnick Academy@3x.png'
import './Sponsors.css'
export default function SponsorsPage() {
  return (
    <Row className="justify-content-center mt-3 mb-3 d-flex hiddenOverflow" id="sponsors">
      <Col xs={12} md={10}lg={9}>
        <Row className="mx-md-2 mx-2">
          <h2 className="boldTxt ">Sponsors</h2>
          <h3 className="">Thank you to our sponsors!</h3>
        </Row>
        <Row xs={1} sm={3} md={3} lg={6} className="mt-2 mx-2 p-3 sponsorRow justify-content-center">
          <Col>
            <img className="sponsorImg img-fluid" alt="Calaveras Community Logo" src={CalaverasCommunityLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg img-fluid " alt="Dignity Health Logo"  src={DignityHealthLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg img-fluid " alt="Phinells Logo" src={PhinellsLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg img-fluid " alt="Taco Bell Logo" src={TacoBellLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg img-fluid " alt="Sierra Pacific Logo" src={SierraPacificLogo}/>
          </Col>
          <Col>
            <img className="sponsorImg img-fluid" alt="Gunrick Logo" src={GurnickLogo}/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
