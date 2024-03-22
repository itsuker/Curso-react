import React from "react"; //imporatancio react
import  ReactDOM  from "react-dom/client"; //herramienta para renderizarlo
import './style.css'//Importar stylos css
import { CounterApp } from "./CounterApp";
//import { HelloWorldApp } from './HelloWordApp'; //importacion de libreria
//import { FirstApp } from "./FirstApp";


//Ejecutar componente
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 
    <CounterApp value= {10}></CounterApp>
</React.StrictMode>

)
/**    <CounterApp value= {10}></CounterApp> los numericos van {} */
/* Este es el componente  <FirstApp title=""  Elemento padre  ></FirstApp> */