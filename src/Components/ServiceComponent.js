import React from 'react'
import './service.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGavel, faBriefcase, faBabyCarriage, faLandmark, faCar, faSchool, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

export default function ServiceComponent() {
  return (
    <div>
        <div className='service-btn blue-purple'>
        <FontAwesomeIcon icon={faGavel}/>
        </div>
        <div><p>service title</p></div>
    </div>
  )
}
