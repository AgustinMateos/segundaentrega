import { useRef } from "react"
export const Register = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form

    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple

        fetch('http://localhost:4000/auth/register', {
            method: "POST",//envio info al servidor
            headers: {
                "Content-Type": "application/json" //defino que enviar
            },
            body: JSON.stringify(cliente)
        })
            .then(response => response.json())
            .then(data => {
                document.cookie = `token=${data.token};expires=${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/`
                console.log(data.token)
            })
            .catch(error => console.error(error))

        e.target.reset() //Reset form
    }
    return (
        <div className="container divForm" >
            <h3>Formulario de registro</h3>
            <form onSubmit={consultarForm} ref={datForm}>
                <div >
                    <label htmlFor="first_name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="first_name" required />
                </div>
                <div >
                    <label htmlFor="last_name" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="last_name" required />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div >
                    <label htmlFor="age" className="form-label">Edad</label>
                    <input type="number" className="form-control" name="age" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" />
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    )
}