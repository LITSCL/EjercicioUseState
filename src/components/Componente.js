import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export const Componente = (props) => {
  var [yearActualState, setYearActualState] = useState(props.yearActual);

  const aumentarHandler = (e) => {
    setYearActualState(yearActualState + 1);
  }

  const decrementarHandler = (e) => {
    setYearActualState(yearActualState - 1);
  }

  const cambiarYearHandler = (e, year) => {
    if (Number.isInteger(parseInt(year))) { //Verificando que el valor sea un número.
      setYearActualState(year);
    }
  }

  return (
    <>
      <strong>{yearActualState}</strong>
      <p>
        <button onClick={(e) => aumentarHandler(e)}>Aumentar</button>
      </p>
      <p>
        <button onClick={(e) => decrementarHandler(e)}>Decrementar</button>
      </p>
      <p>
        <input type="number" onChange={(e) => cambiarYearHandler(e, e.target.value)}/>
      </p>
    </>
  );
}

Componente.propTypes = { 
  yearActual: PropTypes.number.isRequired
}