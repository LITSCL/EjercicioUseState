import React from 'react';
import './App.css';
import { Componente } from './components/Componente';

function App() {
  const fechaActual = new Date();
  const yearActual = fechaActual.getFullYear();
  
  return (
    <div className="App">
      <Componente yearActual={yearActual}></Componente>
    </div>
  );
}

export default App;
