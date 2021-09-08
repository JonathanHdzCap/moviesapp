export default function ContenidoDinamico(props: any) {
    // Ej 1: Operador Ternario
    // return (
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null}
    //     </div>
    // )

    //Ej 2: If
    if (props.calificacion > 90) {
        return (
            <div>
                <h3>
                    {props.nombre} Excelenete calificación
                </h3>
            </div>
        )
    } else if (props.calificacion >= 80 && props.calificacion <= 90) {
        return (<h3> {props.nombre} Muy bien hecho</h3>)
    } else if(props.calificacion >= 0 && props.calificacion < 80){
        return (<h3> {props.nombre} lol...</h3>)
    }else{
        throw `HA HABIDO UN ERROR CON LA CALIFICACION DE ${props.nombre}` 
    }
}