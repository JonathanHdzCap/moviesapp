import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilis/Button";
import FormGroupText from "../utilis/FormGroupText";
import * as Yup from 'yup';
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre del genero" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link to="/generos" className="btn btn-secondary">Cancelar</Link>
                </Form>
            )}


        </Formik>
    )
}

interface formularioGenerosProps {
    modelo: generoCreacionDTO,
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}