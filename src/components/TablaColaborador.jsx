import { Table } from 'react-bootstrap';

const TablaColaborador = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre Colaborador</th>
                    <th>Email Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {props.Colaboradores.filter((val) => {
                    if (val.nombre.toLowerCase().includes(props.filtrado.toLowerCase())) {
                        return val;
                    }
                }).map((Colaborador) => (
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
