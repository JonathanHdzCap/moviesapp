import React, { useState } from 'react';
import './App.css';
import ContenidoDinamico from './Componentes/ContenidoDinamico';
import EjemploReloj from './Componentes/ejemploReloj';
import FormularioTexto from './Componentes/FormularioTexto';
import MostrarTexto from './Componentes/MostrarTexto';
import ProyectarContenido from './Componentes/ProyectarContenido';
import ProyecartContenido2 from './Componentes/ProyectarContenido2';


function App() {
  const [texto, setTexto] = useState('valor por defecto');
  const [checked, setChecked] = useState(false);
  const imageURL = 'https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png';
  const manejarClick = () => {
    console.log("click desde el botón");
  };

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  const parteIntermedia = <EjemploReloj />
  const alumnos = [
    { id: 1, nombre: "Felipe", calificacion: 75 },
    { id: 2, nombre: "Laura", calificacion: 85 },
    { id: 3, nombre: "Manuel", calificacion: 95 },
  ]

  return (
    <>
      <h1 className="rojo" >Hi! World</h1>

      {/* <ContenidoDinamico mostrarMensajeSecreto={true}></ContenidoDinamico> */}
      {/* <ContenidoDinamico calificacion={90}></ContenidoDinamico> */}

      {alumnos.map(alumno => <ContenidoDinamico key={alumno.id} {...alumno} />)}

      <ProyecartContenido2
        parteIntermedia={parteIntermedia}
        parteInferior={<h3>Inferior</h3>}
      />

      <ProyectarContenido>
        <span>Contenido proyectado</span>
      </ProyectarContenido>

      <button
        onMouseEnter={() => console.log('Entrando')}
        onClick={manejarClick}>Clickeame</button>
      <br></br>

      {/* <input onKeyUp={(e) => manejarKeyUp(e)} type="text" /> */}
      <FormularioTexto manejarKeyUp={(e:string) => manejarKeyUp(e)}/>
      <MostrarTexto texto={texto} />
      <br></br>

      <img alt="logo react" src={imageURL} />
      <div>
        <input type="checkbox" onChange={(e) => setChecked(e.currentTarget.checked)} checked={checked} /> This is Checkbox
      </div>
    </>
  );
}

export default App;
