import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contacto = () => {
    const datosFormulario = React.useRef() //Creo la referencia
    let navigate = useNavigate() //Ubicacion actual de mi componente
    const consultarFormulario = (e) => {
        e.preventDefault()        
        const datForm = new FormData(datosFormulario.current) //Genero un objeto iterator 8objeto qe mediante una oteracion devuelve cada uno de los datos) de esos datos
        const contacto = Object.fromEntries(datForm) //Recibe como parametro un objeto iterator y devulve un objeto => Transforma en un objeto literal    
        e.target.reset() //Reseteo el formulario
        toast.success("Gracias por contactarse con nosotros")
        navigate("/")//Redirijo a pagina inicial
    }


  return (
    <div className="container">
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input required type="text" className="form-control" name="nombre"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input required type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
                <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                <input required type="email" className="form-control" name="repEmail" />
            </div>
        <div className="mb-3">
            <label htmlFor="celular" className="form-label">Numero telefonico</label>
            <input required type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
            <label htmlFor="consulta" className="form-label">Consulta</label>
            <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
    
    

  )
}