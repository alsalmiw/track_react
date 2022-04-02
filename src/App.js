import React, {useState, useContext} from 'react'
import ServicesContext from './Context/ServicesContext';
import UseServices from './Hooks/use-services';
import './App.css';

function App() {
  return (
   <ServicesContext.Provider value={UseServices()}>
   <div>
     <p>Hello</p>
   </div>
  </ServicesContext.Provider>

  );
}

export default App;
