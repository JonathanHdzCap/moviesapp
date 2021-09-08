import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {
    // Estados
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    //Se ejecuta el useEffect cuando se va crear el componente App
    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: 'Spider-Man: Far From Home',
                        poster: 'https://images-na.ssl-images-amazon.com/images/I/91yWd9QApeL._AC_SL1500_.jpg'
                    },
                    {
                        id: 2, titulo: 'Moana',
                        poster: 'https://w7.pngwing.com/pngs/555/447/png-transparent-wedding-invitation-moana-party-paper-birthday-moana-moana-illustration-holidays-angel-black-friday.png'
                    }
                ],
                enEstreno: [
                    {
                        id: 3, titulo: 'Soul',
                        poster: 'https://i.pinimg.com/originals/be/7a/d5/be7ad5eed62f4acf2cf6948353bbe977.png'
                    }
                ]
            });
        }, 500);

        //Se ejecuta return cuando se va a destruir el componente App
        return () => {
            clearTimeout(timerId);
        };
    });


    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />
            <h3>Proximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.enEstreno} />
        </>
    )
}