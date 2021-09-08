import React, { useState } from 'react';
import './App.css';
import Abuelo from './Componentes/Abuelo';
import ContenidoDinamico from './Componentes/ContenidoDinamico';
import EjemploReloj from './Componentes/ejemploReloj';
import EjemploUseEffect from './Componentes/EjemploUseEfect';
import ErrorBoundary from './Componentes/ErrorBoundary';
import FormularioTexto from './Componentes/FormularioTexto';
import MostrarTexto from './Componentes/MostrarTexto';
import ProyectarContenido from './Componentes/ProyectarContenido';
import ProyecartContenido2 from './Componentes/ProyectarContenido2';
import ValorContext from './ValorContext';


function App() {
  const [texto, setTexto] = useState('valor por defecto');
  const [checked, setChecked] = useState(true);
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
    { id: 3, nombre: "Manuel", calificacion: -1 },
  ]

  return (
    <>
      <h1 className="rojo" >Hi! World</h1>

      {alumnos.map(alumno =>
        <ErrorBoundary key={alumno.id}>
          <ContenidoDinamico {...alumno} />
        </ErrorBoundary>
      )}

      {/* <ValorContext.Provider value={texto}>
        <Abuelo/>
      </ValorContext.Provider>

      {checked ? <EjemploUseEffect/> : null}
      <div>
        <input type="checkbox" onChange={(e) => setChecked(e.currentTarget.checked)} checked={checked} /> Mostrar componente useEffect
      </div> */}

      {/* <ContenidoDinamico mostrarMensajeSecreto={true}></ContenidoDinamico> */}
      {/* <ContenidoDinamico calificacion={90}></ContenidoDinamico> */}

      {/* <ProyecartContenido2
        parteIntermedia={parteIntermedia}
        parteInferior={<h3>Inferior</h3>}
      />

      <ProyectarContenido>
        <span>Contenido proyectado</span>
      </ProyectarContenido> */}

      <button
        onMouseEnter={() => console.log('Entrando')}
        onClick={manejarClick}>Clickeame</button>
      <br></br>

      {/* <input onKeyUp={(e) => manejarKeyUp(e)} type="text" /> */}
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
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
