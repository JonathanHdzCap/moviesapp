import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilis/Button";
import FormGroupText from "../utilis/FormGroupText";
import { actorCreacionDTO } from "./actores.module";
import * as Yup from 'yup'
import FormGroupFechas from "../utilis/FormGroupFecha";

export default function FormularioActores(props: formularioActoresProps) {
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required("El nombre es obligatorio.").primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required("La fecha de nacimiento es obligatorio.")
            })}
        >

            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFechas label="Fecha Nacimiento" campo="fechaNacimiento"/>
                    <Button
                        disabled={formikProps.isSubmitting}
                        type="submit"
                    >
                        Salvar
                    </Button>
                    <Link className="btn btn-default" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioActoresProps {
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}