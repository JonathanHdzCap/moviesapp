import { useContext } from "react";
import ValorContext from "../ValorContext"
import Hijo from "./Hijo";
export default function Padre() {

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Padre: El valor del contexto es: {valor}</h3>
            <Hijo/>
        </>
    )
}