import PropTypes from 'prop-types';
import React from 'react'
/*
function maouseEvent (event ,newValue) //esto por si manda mas parametros
{
  //console.log(event)
  console.log(newValue);
}*/




export const CounterApp = ({value}) => {

  //Funcion mause evento 
const maouseEvent = () =>
{
  console.log('+1');
  value += 1;

}


  return (
    <>
    <h1>CounterApp</h1>
    <h2>{value}</h2>

    <button onClick={maouseEvent}>+1</button>

    </>
    /*
       <button onClick={(event ) => maouseEvent(event ,"hola")}>+1</button> //Esto es cuando se manda mas parametros 
  <button onClick={(event ) => maouseEvent(event)}>+1</button> //Esto no es necesario solo con mandar la funcion solo cuando son mas parametros    
    * <button onClick={function (event){console.log(event)}}>+1</button>*/
  )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}


