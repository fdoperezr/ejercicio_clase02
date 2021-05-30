import { useState } from "react"

interface Contacto {
    nombre: string,
    apellidos: string,
    correo: string,
    comentario: string
}


export default function ContactForm() {

    const [contacto, setcontacto] = useState<Contacto>({
        nombre: '',
        apellidos: '',
        correo: '',
        comentario: ''
    });
   

    const submit = (event: any): void => {     
        event.preventDefault();
        setcontacto({
            nombre: '',
            apellidos: '',
            correo: '',
            comentario: ''
        })
        alert(JSON.stringify(contacto));


    };

    const hanlderInput = (event: any): void => {
        setcontacto({
            ...contacto,
            [event.target.name] : event.target.value
        })
       
    };

    return (
        <section
            id="contacto">
            <div
                className="container py-5 text-center">
                <h2>Contacto</h2>
                <p
                    className="lead">
                    Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
                </p>
            </div>
            <div
                className="container d-flex justify-content-center">
                <div
                    className="col-md-7 col-lg-8">
                    <form className="needs-validation"
                        noValidate={false}
                        onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="firstName"
                                    >
                                    Nombre
                                    </label>
                                <input className="form-control"
                                    type="text"                                    
                                    id="firstName"
                                    placeholder=""
                                    value={contacto?.nombre}
                                    name="nombre"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="lastName"
                                    >
                                    Apellidos
                                    </label>
                                <input className="form-control"
                                    type="text"                                    
                                    placeholder=""
                                    value={contacto?.apellidos}
                                    name="apellidos"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email"
                                    >
                                    Correo Electrónico
                                    </label>
                                <input className="form-control"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={contacto?.correo}
                                    name="correo"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email"
                                    >
                                    Comentarios
                                    </label>
                                <textarea className="form-control"
                                    rows={3} 
                                    value={contacto?.comentario}
                                    name="comentario"
                                    onChange={hanlderInput}
                                    required>

                                </textarea>
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>


                            <button className="w-100 btn btn-primary btn-lg"
                                type="submit">
                                Enviar
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
