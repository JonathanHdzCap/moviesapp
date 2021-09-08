import CrearActor from "./actores/CrearActores";
import EditarActor from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";

import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import LandingPage from "./LandinPage";
import CrearPelicula from "./peliculas/CrearPelicula";
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarLanding from "./utilis/RedireccionarLandin";

const rutas = [
    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar/:id(\\d+)', componente: EditarGenero },
    { path: '/generos', componente: IndiceGeneros, exact: true },

    { path: '/actores/crear', componente: CrearActor },
    { path: '/actores/editar/:id(\\d+)', componente: EditarActor },
    { path: '/actores', componente: IndiceActores, exact: true },

    { path: '/cines/crear', componente: CrearCine },
    { path: '/cines/editar/:id(\\d+)', componente: EditarCine },
    { path: '/cines', componente: IndiceCines, exact: true },

    { path: '/peliculas/crear', componente: CrearPelicula },
    { path: '/peliculas/editar/:id(\\d+)', componente: EditarPelicula },
    { path: '/peliculas/filtrar', componente: FiltroPeliculas },

    { path: '/', componente: LandingPage, exact: true },
    { path: '*', componente: RedireccionarLanding }
];

export default rutas;