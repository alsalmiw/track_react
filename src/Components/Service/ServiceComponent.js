import React, {useState, useEffect, useContext} from 'react'
import './service.css'
import UseServices from "../../Hooks/use-services";
import ServicesContext from '../../Context/ServicesContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col} from "react-bootstrap";
import {faGavel, faBriefcase, faBabyCarriage, faLandmark, faCar, faSchool, faPiggyBank, faBurger, faBriefcaseMedical, faFileSignature, faBuildingShield, faPersonMilitaryPointing, faSignHanging, faPassport, faWallet, faLightbulb, faEnvelopesBulk, faHandHoldingHand, faPhotoFilm, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';

export default function ServiceComponent({service, idx}) {
  let {setShow, setServiceObj} = useContext(ServicesContext)
   const [serviceIcon, setServiceIcon] = useState('')
   const [btnClass, setBtnClass]=useState('')

    useEffect(()=>{
     btnStyle()
      },[])
    
      const icons = new Map([
        ['faGavel', faGavel],
        ['faBriefcase', faBriefcase],
        ['faBabyCarriage', faBabyCarriage],
        ['faLandmark', faLandmark],
        ['faCar',faCar],
        ['faSchool',faSchool],
        ['faPiggyBank',faPiggyBank],
        ['faBurger',faBurger],
        ['faBriefcaseMedical',faBriefcaseMedical],
        ['faFileSignature',faFileSignature],
        ['faBuildingShield',faBuildingShield],
        ['faPersonMilitaryPointing',faPersonMilitaryPointing],
        ['faSignHanging',faSignHanging],
        ['faPassport',faPassport],
        ['faWallet',faWallet],
        ['faLightbulb',faLightbulb],
        ['faEnvelopesBulk',faEnvelopesBulk],
        ['faHandHoldingHand', faHandHoldingHand],
        ['faPhotoFilm', faPhotoFilm],
        ['faMapLocationDot', faMapLocationDot]

      ])
      
    
    const btnStyle = () => {
        let index=0;
        let colors = ["service-btn blue-purple", 'service-btn pink-red', "service-btn yellow-lime", "service-btn green-blue" , "service-btn orange-yellow" ]
        index = idx%colors.length
        setBtnClass(colors[index]) 
    }

    const handleShowModal =() => {
      setShow(true)
      setServiceObj(service)
    }

  return (
    <Col key={idx} className='service-container'>
    <div className="service-btn-container" onClick={handleShowModal}>
        <div className={btnClass}>
        <FontAwesomeIcon icon={icons.get(service.icon)}/>
        </div>
        <div className='service-title'><p>{service.serviceName}</p></div>
    </div>
    </Col>
  )
}
