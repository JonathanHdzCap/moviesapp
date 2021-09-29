import FormularioActores from "./FormularioActores";

export default function EditarActor() {
    return (
        <>
           <h3>Editar Actores</h3>
           <FormularioActores
                modelo={{ nombre: "Tom Holland", fechaNacimiento: new Date('1992-11-19T00:00:00')}}
                onSubmit={async (valores) => {
                    await new Promise(r => setTimeout(r,3000))
                    console.log(valores);
                }}
            />
        </>

    )
}