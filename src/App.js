import React, {useState, useContext} from 'react'
import ServicesContext from './Context/ServicesContext';
import UseServices from './Hooks/use-services';
import ServicesPage from './Pages/ServicesPage';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <ServicesContext.Provider value={UseServices()}>
   <div>
     <NavbarComponent/>
     <p>Hello</p>
     <ServicesPage />
     <FooterComponent />
   </div>
  </ServicesContext.Provider>

  );
}

export default App;
