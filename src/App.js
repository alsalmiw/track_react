import React, {useState, useContext} from 'react'
import ServicesContext from './Context/ServicesContext';
import UseServices from './Hooks/use-services';
import ServicesPage from './Pages/ServicesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <ServicesContext.Provider value={UseServices()}>
   <div>
     <p>Hello</p>
     <ServicesPage />
   </div>
  </ServicesContext.Provider>

  );
}

export default App;
