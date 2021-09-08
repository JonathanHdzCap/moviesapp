import { Form, Formik } from "formik";
import { generoCreacionDTO, generoDTO } from "../generos/generos.model";

export default function FiltroPeliculas() {
    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [{ id: 1, nombre: "Acción" }, { id: 2, nombre: "Ficcón" }];

    return (
        <>
            <h3>Filtrar Peliculas</h3>
            <Formik initialValues={valorInicial}
                onSubmit={(valores) => console.log(valores)}
            >

                {(formikProps) => (

                    <Form>
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="titulo" className="form-label">Titulo</label>
                                <input type="text" className="form-control" id="titulo" placeholder="Título de la pelicula"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="genero" className="form-label">Genero</label>
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un genero--</option>
                                    {generos.map(genero =>
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface filtroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}