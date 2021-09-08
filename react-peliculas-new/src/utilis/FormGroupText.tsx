import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props: formGroupTextProps) {
    return (
        <div className="form-group mb-3">
            {props.label ? <label className="form-label" htmlFor={props.campo}>{props.label}</label> : null}
            <Field name={props.campo} className="form-control" placeholder={props.placeholder ? props.placeholder : null} />
            <ErrorMessage name={props.campo}>{mensaje =>
                <MostrarErrorCampo mensaje={mensaje}/>
            }</ErrorMessage>
        </div>
    )
}

interface formGroupTextProps{
    campo: string,
    label? : string,
    placeholder?: string
}