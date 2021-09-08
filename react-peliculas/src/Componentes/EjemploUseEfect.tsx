import { useEffect, useState } from "react"

export default function EjemploUseEffect() {

    const [clicks, setclicks] = useState(0);
    const [fecha, setfecha] = useState(new Date());

    useEffect(() => {
        console.log('Componente cargado')
        document.title = `${clicks} veces`;
        return (() => {
            //return se ejecuta al destruir el componente
            console.log('Componente se va a destriur')
        })
    }, [clicks]) //La variable clicks es una depencia que hace que este use efect solo se ejecute cuando la variable clicks cambie

    useEffect(() => {//Un componente puede tener N useeffect y todos se ejecutan
        const intervalId = setInterval(() => {
            setfecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    })

    useEffect(()=>{
        console.log('Voy a ejecutarme una vez')
    }, []) //cuando hay parametros vacios [] solo se ejecuta una vez

    return (
        <>
            <button onClick={() => setclicks(clicks + 1)}>
                Me has clickeado {clicks} veces
            </button>
            <div>
                {fecha.toString()}
            </div>
        </>
    )
}