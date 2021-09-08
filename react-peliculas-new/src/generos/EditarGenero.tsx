// import { useParams } from "react-router"
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){

    // const {id}: any = useParams();

    return (
        <>
        <h3>Editar Genero</h3>
         {/* Formulario usando libreria Formik */}
         <FormularioGeneros modelo={{nombre: 'Acción'}}
                onSubmit={async (valores) => {
                    await new Promise(r => setTimeout(r,3000))
                }}
            />
        </>
    )
}