import Form from 'react-bootstrap/Form';

const Filtrador = (props) => {
    const Input = (e) => props.setFiltrado(e.target.value);
    return (
        <>
            <h4>Filtro de Colaboradores</h4>
            <Form.Control
                type="search"
                placeholder="Filtro de Colaboradores"
                className="me-2"
                aria-label="Search"
                onChange={Input}
            />
        </>
    );
};

export default Filtrador;