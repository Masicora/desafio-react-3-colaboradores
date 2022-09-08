import { useState } from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';

const FormColaborador = (props) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const capturarNombre = (e) => {
        setNombre(e.target.value);
    };
    const capturarEmail = (e) => {
        setEmail(e.target.value);
    };

    const guardarColaboradorForm = (e) => {
        e.preventDefault();

        const Colaborador = {
            id: Date.now(),
            nombre: nombre,
            email: email
        };

        props.guardarColaborador(Colaborador);

    };

    return (
        <>
            <Form onSubmit={guardarColaboradorForm}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        value={nombre}
                        onChange={capturarNombre}
                        type="text"
                        placeholder="Ingresar Nombre"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={capturarEmail}
                        type="email"
                        placeholder="Ingresar Email"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </>
    );
};

export default FormColaborador;
