import React, { useEffect, useState } from 'react';
import './App.css';
import AppCSS from './App.module.css'

function App() {
  const cuadradoAzul = {
    backgroundColor: 'blue',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
  };

  const subtitulo = 'Este es un subtitulo';

  const duplicar = (valor: number) => valor * 2;

  const imageURL = 'https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png';

  return (
    <>
      <h1 className="rojo" >Hi! World</h1>
      <div className="cuadradoRojo" ></div>
      <h3 style={{ color: 'blue' }}>{subtitulo.toUpperCase()}</h3>
      <h4 className="color">Index css: El doble de 3 es {duplicar(3)}</h4>
      <h4 className={AppCSS.color}>App.Module.css</h4>
      <img alt="logo react" src={imageURL} />
      <div>
        <input type="checkbox" checked={true} /> This is Checkbox
      </div>
      <div className="cuadradoRojo" ></div>
      <div style={cuadradoAzul}></div>
    </>
  );
}

export default App;
