import { BrowserRouter ,Route, Routes as RoutesWrapper } from 'react-router-dom';
import Clientes  from '../pages/cliente';
import CadastroClientes from '../pages/cadastro';
import Edicao from '../pages/edite';


function Routes() {
  return (
    //<BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Clientes />} />
        <Route path="/cadastro" element={<CadastroClientes />} />
        <Route path="/edite/:id" element={<Edicao />} />
      </RoutesWrapper>
    //</BrowserRouter>
  );
}

export default Routes;
