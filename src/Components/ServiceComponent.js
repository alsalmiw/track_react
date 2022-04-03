import React, {useState, useEffect, useContext} from 'react'
import './service.css'
import UseServices from "../Hooks/use-services";
import ServicesContext from '../Context/ServicesContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGavel, faBriefcase, faBabyCarriage, faLandmark, faCar, faSchool, faPiggyBank, faBurger, faBriefcaseMedical, faFileSignature, faBuildingShield, faPersonMilitaryPointing, faSignHanging, faPassport, faWallet, faLightbulb, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

export default function ServiceComponent({service, idx}) {
  let {setShow, setServiceObj} = useContext(ServicesContext)
   const [serviceIcon, setServiceIcon] = useState('')
   const [btnClass, setBtnClass]=useState('')

    useEffect(()=>{
     setServiceIcon(service.icon) 
     btnStyle()
      },[])
      
    let index=0;
    const btnStyle = () => {
        let colors = ["service-btn blue-purple", 'service-btn pink-red', "service-btn yellow-lime", "service-btn green-blue" , "service-btn orange-yellow" ]
        index = idx%colors.length
        setBtnClass(colors[index]) 
    }

    const handleShowModal =() => {
      setShow(true)
      setServiceObj(service)
    }

  return (
    <div key={idx} className='service-container' onClick={handleShowModal}>
        <div className={btnClass}>
        <FontAwesomeIcon icon={faGavel}/>
        </div>
        <div className='service-title'><p>{service.serviceName}</p></div>
    </div>
  )
}
