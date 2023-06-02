import { useEffect, useState, useCallback } from "react";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Navbar from "../components/nav";

interface IEndereco {
  id: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  codigoPostal: string;
  informacoesAdicionais: string;
}

interface ICliente {
  id: number;
  nome: string;
  sobreNome: string;
  endereco: IEndereco;
}

function Clientes() {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const navigate = useNavigate();

  const getAllClientes = useCallback(() => {
    api
      .get("/clientes", {})
      .then(({ data }) => {
        const clientesData = data.map((cliente: any) => {
          return {
            id: cliente.id,
            nome: cliente.nome,
            sobreNome: cliente.sobreNome,
            endereco: {
              id: cliente.endereco.id,
              estado: cliente.endereco.estado,
              cidade: cliente.endereco.cidade,
              bairro: cliente.endereco.bairro,
              rua: cliente.endereco.rua,
              numero: cliente.endereco.numero,
              codigoPostal: cliente.endereco.codigoPostal,
              informacoesAdicionais: cliente.endereco.informacoesAdicionais,
            },
          };
        });
        setClientes(clientesData);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [setClientes]);

  const handleDeleteCliente = useCallback(
    (id: number) => {
      api
        .delete(`/clientes/excluir/${id}`)
        .then(() => {
          getAllClientes();
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
        });
    },
    [getAllClientes]
  );

  useEffect(() => {
    getAllClientes();
  }, [getAllClientes]);

  return (
    <>
      <Navbar />
      <div className="cliente">
        <br />
        <br />
        <main>
          <div>
            <br />
            <div className="col s12 m12 l6 estilo">
              <div className="box">
                <h4 className="margin_left">Clientes</h4>
                <table className="responsive-table highlight">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Sobrenome</th>
                      <th>Estado</th>
                      <th>Cidade</th>
                      <th>Bairro</th>
                      <th>Rua</th>
                      <th>Número</th>
                      <th>Código Postal</th>
                      <th>Informações Adicionais</th>
                      <th>Editar</th>
                      <th>Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes &&
                      clientes.map((c) => {
                        return (
                          <tr key={c.id}>
                            <td>{c.nome}</td>
                            <td>{c.sobreNome}</td>
                            <td>{c.endereco.estado}</td>
                            <td>{c.endereco.cidade}</td>
                            <td>{c.endereco.bairro}</td>
                            <td>{c.endereco.rua}</td>
                            <td>{c.endereco.numero}</td>
                            <td>{c.endereco.codigoPostal}</td>
                            <td>{c.endereco.informacoesAdicionais}</td>
                            <td>
                              <Link className="edit" to={`/edite/${c.id}`}>
                                <MdModeEdit />
                              </Link>
                            </td>
                            <td>
                              <button
                                className="delete"
                                onClick={() => handleDeleteCliente(c.id)}
                              >
                                <MdDelete />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <br />
          </div>
          <br />
        </main>
      </div>
    </>
  );
}

export default Clientes;
