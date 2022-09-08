import BaseColaboradores from './BaseColaboradores';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filtrador from './components/Filtrador';
import FormColaborador from './components/FormColaborador';
import TablaColaborador from './components/TablaColaborador';

function App() {

  const [Colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtrado, setFiltrado] = useState("");
  const guardarColaborador = (Colaborador) => {
    setColaboradores([...Colaboradores, Colaborador]);
  };

  return (
    <>
      <Filtrador
        setFiltrado={setFiltrado}
      />
      <FormColaborador
        guardarColaborador={guardarColaborador}
      />
      <TablaColaborador
        Colaboradores={Colaboradores} filtrado={filtrado}
      />
    </>
  );

}

export default App;
