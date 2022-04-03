import React, {useState, useEffect} from 'react'
import './service.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGavel, faBriefcase, faBabyCarriage, faLandmark, faCar, faSchool, faPiggyBank, faBurger, faBriefcaseMedical, faFileSignature, faBuildingShield, faPersonMilitaryPointing, faSignHanging, faPassport, faWallet, faLightbulb, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

export default function ServiceComponent(props) {
   const [serviceIcon, setServiceIcon] = useState('')
   const [btnClass, setBtnClass]=useState('')
    useEffect(()=>{
     setServiceIcon(props.service.icon) 
     btnStyle()
      },[])

      
    console.log(props)
    let {service, idx} = props
    let index=0;
    const btnStyle = () => {
        let colors = ["service-btn blue-purple", 'service-btn pink-red', "service-btn yellow-lime", "service-btn green-blue" , "service-btn orange-yellow" ]
        index = idx%colors.length
        setBtnClass(colors[index]) 
    
}
   

  return (
    <div key={idx} className='service-container'>
        <div className={btnClass}>
        <FontAwesomeIcon icon={faGavel}/>
        </div>
        <div><p>{service.serviceName}</p></div>
    </div>
  )
}
