import { Table } from 'react-bootstrap';

const TablaColaborador = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre Colaborador</th>
                    <th>Email Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {props.Colaboradores.map((Colaborador) => (
                    <tr key={Colaborador.id}>
                        <td>{Colaborador.id}</td>
                        <td>{Colaborador.nombre}</td>
                        <td>{Colaborador.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaColaborador;
