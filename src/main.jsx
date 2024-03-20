import React from "react"; //imporatancio react
import  ReactDOM  from "react-dom/client"; //herramienta para renderizarlo
//import HelloWordApp from "./HelloWordApp";
/*import  App  from "./HelloWordApp"; */ // forma global de exportar  todo lo el contenido

import { FirstApp } from "./FirstApp";
import './style.css'//Importar stylos css

//Ejecutar componente
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 
 <FirstApp title="hola, soy Goku" />
</React.StrictMode>

)
/**title={123} si establece un valor que no sea string dara error */
/**una forma de enviar numeros  subtitle =  {123}/> */