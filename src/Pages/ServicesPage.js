import React, { useContext, useEffect, useState } from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ServiceComponent from "../Components/ServiceComponent";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import {GetAllServices} from '../Services/DataService'
import UseServices from "../Hooks/use-services";
import ServicesContext from '../Context/ServicesContext'

export default function ServicesPage() {

  let {servicesArr, setServicesArr} = useContext(ServicesContext)

  useEffect(()=>{
    fetchServices()
  },[])



  const fetchServices = async() => {
    let fetchedServices = await GetAllServices()
    if(fetchedServices.length!=0)
    {
      setServicesArr(fetchedServices)
    }
  }


  return (
    <Container className="services-container" fluid>
      <Row className="services-md-container">
        <Col >
          <Row>
            <h2>Services</h2>
          </Row>
          <Row>
            <p>Select a service to view more information.</p>
          </Row>
          <Row>
            <InputGroup className="mb-3 search-bar"> 
              <InputGroup.Text className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <FormControl
                className="search-bar"
                placeholder="Search for services... "
                aria-label="Search"
              />
            </InputGroup>
          </Row>
          <Row>
          {
            servicesArr.map((service, idx)=> {
              return(
                <ServiceComponent key={idx} service={service} idx={idx} />
            )})
          }
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
