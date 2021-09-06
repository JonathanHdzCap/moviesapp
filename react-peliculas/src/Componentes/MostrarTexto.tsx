export default function MostrarTexto(props: mostrarTextoProps){
    return(
        <div>{props.texto}</div>
    )
}

interface mostrarTextoProps{
    texto: string;
}

MostrarTexto.defaultProps = {
    texto: "Valor por defecto default props"
}