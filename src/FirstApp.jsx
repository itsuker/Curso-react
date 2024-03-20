import { Fragment } from "react"  //Esto es solo si usa el frament

/*
const newMessage = {
  message:  'hola mundo',
  title:'sma',
}*/

const suma = (valor)=>{ /* Si no existe una dependencia de una variable es mejor que esten afuera*/
  valor =  2+ 3
  return  valor
}

//const FirstApp = () => {
    /**Fragment es un elemento que permite agrupar un elemento abajo del otro */

  
 //   return (
   /* <Fragment> 
      <h1>sma rcz</h1>
      <p> Soy un spia</p>
    </Fragment>*/
    /**Esto es lo mismo que lo de arriba
     * Siempre tenemos que regresar el modo padre
     */

 //     <> 
 //     <h1>Sma</h1>
  //    <p> Soy un spia</p>


   
 //     <h1>{/*JSON.stringify(newMessage)*/}</h1> 
      
 //   </>
   
//  )
// }


import PropTypes from 'prop-types'; //Paquete para establecer propiedades un tipo dato install:  yarn add prop-types


 export const FirstApp = ({title,subtitle ,name}) => { 

  return (

    <> 
    <h1>{title}</h1>
    <p> {subtitle }</p>
    <p> {name }</p>
  </>
 
)
}

//Aqui se establece el tipo de dato que acepta esta  variable
FirstApp.propTypes =  {
  title: PropTypes.string.isRequired,
  subtitle:PropTypes.string.isRequired
}

//Esto es para poner dato por defecto ,pero siempre van entrar antes
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'no hay subitutlo',
  name: 'sma'
}



