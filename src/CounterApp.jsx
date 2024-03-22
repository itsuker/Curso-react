import PropTypes from 'prop-types';
import React, { useState } from 'react'; //Libreria de useState el useState es una fucion

/*
function maouseEvent (event ,newValue) //esto por si manda mas parametros
{
  //console.log(event)
  console.log(newValue);
}*/




export const CounterApp = ({ value }) => {

  //Esto es una destruracion del retorno de una funcion
  const [counter, setCounter] = useState(value);  //Tambien el estado empieza en 0  o numero o variable sera lo que saldra


  //Funcion mause evento 
  const maouseEvent = () => {
    // setCounter(counter + 1); //cuando mandallamar el setCOunter el stado del hook cambio es necesaro renderizar el componente
    setCounter((c) => c + 1); //valor de retorno va ser el nuevo valor tendra el counter  del callback
  }

  const maouseEventRestar = () =>{ 
    setCounter( counter - 1);
  }

  const mauseReset  = ()=>{
    setCounter(value);
   //setCounter((c) => c = 20)
  }


  return (
    <>
    <div className='contenido contenedor'>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={maouseEvent /*Evento de mauseEvent sumar +1 */}>+1</button>
      <button onClick={maouseEventRestar   /*Evento de mauseEvent sumar -1 */     } >-1</button>
      <button className='contenido__boton' onClick={mauseReset    /*Evento de mauseReset evento que reinicia los valores */     } >Reset</button> 
      </div>
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


