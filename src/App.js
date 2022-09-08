import BaseColaboradores from './BaseColaboradores';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormColaborador from './components/FormColaborador';
import TablaColaborador from './components/TablaColaborador';

function App() {

  const [Colaboradores, setColaboradores] = useState(BaseColaboradores);

  const guardarColaborador = (Colaborador) => {
    setColaboradores([...Colaboradores, Colaborador]);
  };

  return (
    <>
      <FormColaborador
        guardarColaborador={guardarColaborador}
      />
      <TablaColaborador
        Colaboradores={Colaboradores}
      />
    </>
  );

}

export default App;
