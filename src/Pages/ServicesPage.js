import React, { useContext, useEffect, useState } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ServiceComponent from "../Components/Service/ServiceComponent";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import {GetAllServices, GetSearchResult} from '../Services/DataService'
import UseServices from "../Hooks/use-services";
import ServicesContext from '../Context/ServicesContext'
import ModalComponent from "../Components/Modal/ModalComponent";

export default function ServicesPage() {

  let {servicesArr, setServicesArr} = useContext(ServicesContext)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    fetchServices()
  },[])

   const fetchServices = async() => {
    let fetchedServices = await GetAllServices()
    if(fetchedServices.length!=0){
      setServicesArr(fetchedServices)
    }
  }

  const fetchSearch = async() => {
    let search = await GetSearchResult(searchTerm)
    if(search.length!=0){
      setServicesArr(search)
    }    
  }

  const handleSubmitSearch=(e)=>{
    e.preventDefault();
    console.log(searchTerm)
    if(searchTerm.length!=0){
        fetchSearch()
      }
    else{
        fetchServices()
    }
  }

  return (
    <Row className="services-container d-flex justify-content-center p-3" fluid id="services">
        <Col xs={12} md={10}lg={9}>
          <Row>
            <h2 className="bold">Services</h2>
          </Row>
          <Row>
            <h3>Select a service to view more information.</h3>
          </Row>
          <Row>
            <Form onSubmit={handleSubmitSearch}>
            <InputGroup className="mb-3 search-bar"> 
              <InputGroup.Text className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <FormControl
                className="search-bar"
                type="text"
                placeholder="Search for services... "
                aria-label="Search"
                onChange={(e)=> setSearchTerm(e.target.value)}
              />
            </InputGroup>
            </Form>
          </Row>
          <Row className="btn-services-contain">
          {
            servicesArr.map((service, idx)=> {
              return(
                <ServiceComponent key={idx} service={service} idx={idx} />
            )})
          }
            
          </Row>
        </Col>
     
      <ModalComponent />
    </Row>
  );
}
