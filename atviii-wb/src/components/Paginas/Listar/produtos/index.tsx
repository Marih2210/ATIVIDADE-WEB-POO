import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import BarraNav from "../../../NavBar";
import "./styles.css";

function ListarProdutos() {
  return (
    <section>
      <header>
        <BarraNav />
      </header>
      <main>
        <h1>Lista de todos os pedidos de produtos por cliente</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Nome Social</th>
                <th>Genero</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mariana Veloso</td>
                <td>Mariana</td>
                <td>Mulher</td>
                <td>
                  <div className="icons">
                    <a href="/editar_cliente/1">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="/clientes/1">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success">
                      Visualizar produtos
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Isabel Vitória</td>
                <td>Isabel</td>
                <td>Mulher</td>
                <td>
                  <div className="icons">
                    <a href="/editar_servico/1">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="/clientes/1">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success">
                      Visualizar produtos
                    </Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rafaela Vieira</td>
                <td>Rafaela</td>
                <td>Mulher</td>
                <td>
                  <div className="icons">
                    <a href="/editar_servico/1">
                      <PencilSimple size={35} color="#198754" />
                    </a>
                    <a href="/clientes/1">
                      <Eye size={35} color="#0DCAF0" />
                    </a>
                    <a href="##">
                      <Eraser size={35} color="#DC3545" />
                    </a>
                  </div>
                  <div className="Column">
                    <Button variant="outline-success">
                      Visualizar produtos
                    </Button>{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}

export default ListarProdutos;
