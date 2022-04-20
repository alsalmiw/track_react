import React, {useState, useContext} from 'react'
import { Modal } from 'react-bootstrap'
import './modal.css'
import UseServices from "../../Hooks/use-services";
import ServicesContext from '../../Context/ServicesContext';


export default function ModalComponent() {

    let{show, setShow, serviceObj} = useContext(ServicesContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <Modal  show={show} onHide={handleClose} className="" centered >
    <Modal.Header closeButton>
      <Modal.Title>{serviceObj.serviceName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div
      dangerouslySetInnerHTML={{__html: serviceObj.description}}
    /></Modal.Body>
  </Modal>
  )
}
