import React, {useState, useContext} from 'react'
import ServicesContext from './Context/ServicesContext';
import UseServices from './Hooks/use-services';
import ServicesPage from './Pages/ServicesPage';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import SponsorsPage from './Pages/SponsorsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
   <ServicesContext.Provider value={UseServices()}>
   <Container fluid className='containerFluid m-0 p-0'>
     <NavbarComponent/>
     <ServicesPage />
     <SponsorsPage />
     <FooterComponent />
   </Container>
  </ServicesContext.Provider>

  );
}

export default App;
