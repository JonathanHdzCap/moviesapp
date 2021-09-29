import { Field, Form, Formik } from "formik";
import { generoCreacionDTO, generoDTO } from "../generos/generos.model";
import Button from "../utilis/Button";

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
                                {/* <label htmlFor="titulo" className="form-label">Titulo</label> */}
                                <input type="text" className="form-control" id="titulo" placeholder="Título de la pelicula"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="col">
                                {/* <label htmlFor="genero" className="form-label">Genero</label> */}
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un genero--</option>
                                    {generos.map(genero =>
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>

                            <div className="col">
                                <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" type="checkbox" />
                                <label className="form-check-label" htmlFor="proximosEstrenos">Próximos Estrenos</label>
                            </div>

                            <div className="col">
                                <Field className="form-check-input" id="enCines" name="enCines" type="checkbox" />
                                <label className="form-check-label" htmlFor="enCines">En Cines</label>
                            </div>

                            <Button
                                className="btn btn-primary mb-2 mx-sm-3 col"
                                disabled={formikProps.isSubmitting}
                                onClick={() => formikProps.submitForm()}
                            >
                                Filtar
                            </Button>

                            <Button
                                className="btn btn-danger mb-2 col"
                                onClick={() => formikProps.setValues(valorInicial)}
                            >Limpiar
                            </Button>

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