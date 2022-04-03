import React, {useState, useContext} from 'react'
import { Modal } from 'react-bootstrap'
import UseServices from "../Hooks/use-services";
import ServicesContext from '../Context/ServicesContext'

export default function ModalComponent() {

    let{servicesArr, setServicesArr, show, setShow, serviceObj} = useContext(ServicesContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{serviceObj.serviceName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{serviceObj.description}</Modal.Body>
  </Modal>
  )
}
