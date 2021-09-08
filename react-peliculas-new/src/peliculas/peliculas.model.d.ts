export interface pelicula{
    id: number;
    titulo: string;
    poster: strin;
}

export interface landingPageDTO{
    enCartelera?: pelicula[];
    enEstreno?: pelicula[];
}