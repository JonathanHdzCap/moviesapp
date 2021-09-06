export default function FormularioTexto(props: formularioTextoProps) {
    return (
        <input onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)} type="text" />
    )
}

interface formularioTextoProps {
    manejarKeyUp(texto: string): void
}