import { ReactElement } from "react"

export default function ProyecartContenido2(props: proyectarConenido2Props){
    return(
        <>
        parte superior: {props.parteSuperior ? props.parteSuperior : <h3>Contenido por defecto</h3>}
        <hr></hr>
        {props.parteIntermedia}
        <hr></hr>
        {props.parteInferior}
        </>
    )
}

interface proyectarConenido2Props{
    parteSuperior?: ReactElement,
    parteIntermedia: ReactElement,
    parteInferior: ReactElement,
}