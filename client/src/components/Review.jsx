import style from "../styles/Review.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Review() {
    
    const [input, setInput] = useState({
        name: "",
        mail: "",
        review: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
        console.log(errors)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.mail === "Se requiere un mail" || errors.mail === "Ingrese un email válido" || errors.review === "Ingrese más de 50 caracteres") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        } else if(input.name === "" && input.mail === "" && input.review === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        }
        else{
            console.log(input)
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Mensaje enviado con éxito',
            })
            setInput({
                name: "",
                mail: "",
                message: ""
            })
        }
    }
    

    function validate(input) {
        let errors = []
        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.mail) {
            errors.mail = "Se requiere un mail"
        } else if (!input.mail.includes("@")) {
            errors.mail = "Ingrese un email válido"
        }

        if(input.review.length < 50) {
            errors.message = "Ingrese más de 50 caracteres"
        } 

        return errors
    }

    return (
        <div className={style.Review}>
            <div className={style.FirstBlock}>
                <h2><b>Dejanos tu review</b></h2>
                <hr/>
            </div>
            <Form style={{ width: '80rem', "margin-left": "2.5rem"}} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="string" placeholder="Ingresa tu nombre y apellido..." name="name" onChange={(e) => handleChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email..." name="name" onChange={(e) => handleChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="string" placeholder="Dejanos tu review..." name="name" onChange={(e) => handleChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }} type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}