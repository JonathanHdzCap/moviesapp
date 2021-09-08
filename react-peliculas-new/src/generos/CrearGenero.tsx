import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {

    // const history = useHistory();

    return (
        <>
            <h3>Crear Genero</h3>

            {/* Formulario usando libreria Formik */}
            <FormularioGeneros modelo={{nombre: ''}}
                onSubmit={async (valores) => {
                    await new Promise(r => setTimeout(r,3000))
                }}
            />
        </>
    )
}