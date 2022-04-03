import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import CalaverasCommunityLogo from '../Images/Calaveras Community Foundation Logo@3x.png'
import DignityHealthLogo from '../Images/Dignity Health Logo@3x.png'
import PhinellsLogo from '../Images/Pinnells Logo@2x.png'
import TacoBellLogo from '../Images/Taco Bell Logo@3x.png'
import SierraPacificLogo from '../Images/Sierra Pacific Logo@3x.png'
import CalaverasLogo from '../Images/Calaveras Logo@3x.png'
import './Sponsors.css'
export default function SponsorsPage() {
  return (
    <Row className="justify-content-center mt-5 mb-5">
      <Col xs={12} md={9}>
        <p className="m-0"><strong>Sponsors</strong></p>
        <p className="">Thank you to our sponsors!</p>
        <Row className="mt-2">
          <img className="calComLogo" src={CalaverasCommunityLogo}/>
          <img className="dignityLogo" src={DignityHealthLogo}/>
          <img className="phinellsLogo" src={PhinellsLogo}/>
          <img className="tacoBellLogo" src={TacoBellLogo}/>
          <img className="sierraLogo" src={SierraPacificLogo}/>
          <img className="calaverasLogo" src={CalaverasLogo}/>
        </Row>
      </Col>

    </Row>
  )
}
