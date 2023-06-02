import "materialize-css/dist/css/materialize.min.css";
import "../styles/cadastro.css";
import Navbar from "../components/nav";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../services/api";

interface Cliente {
  id: number;
  nome: string;
  sobreNome: string;
  endereco: {
    id: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
  };
}

interface EdicaoProps {
  nome: string;
  sobreNome: string;
  endereco: {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
  };
}

function Edicao() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clienteData, setClienteData] = useState<Cliente>();

  const { register, handleSubmit, getValues, reset } = useForm<EdicaoProps>({
    mode: "onBlur",
  });

  const fetchClienteData = useCallback(async () => {
    try {
      const response = await api.get(`/cliente/${id}`);
      const clienteData = response.data;
      setClienteData(clienteData);
      reset(clienteData); // Reset the form values with the updated data
    } catch (error) {
      console.log(error);
    }
  }, [id, reset]);

  useEffect(() => {
    fetchClienteData();
  }, [fetchClienteData]);

  const onSubmit = useCallback(async () => {
    try {
      const { nome, sobreNome, endereco } = getValues();
      const data = {
        nome,
        sobreNome,
        endereco,
      };
      await api.put(`/cliente/edite/${id}`, data);
      alert("Cliente editado com sucesso!");

      await fetchClienteData();
    } catch (error) {
      console.log(error);
      alert("Erro ao editar");
    }
  }, [id, navigate, getValues, fetchClienteData]);

  if (!clienteData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="topo">
        <div className="row box">
          <h4 className="subtitulo margin_left">Edição de Cliente</h4>
          <div className="row">
            <form onSubmit={handleSubmit(onSubmit)} className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="nome"
                    type="text"
                    className="validate"
                    placeholder="Nome"
                    {...register("nome")}
                    defaultValue={clienteData.nome}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="sobreNome"
                    type="text"
                    className="validate"
                    placeholder="Sobrenome"
                    {...register("sobreNome")}
                    defaultValue={clienteData.sobreNome}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="estado"
                    type="text"
                    className="validate"
                    placeholder="Estado"
                    {...register("endereco.estado")}
                    defaultValue={clienteData.endereco.estado}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="cidade"
                    type="text"
                    className="validate"
                    placeholder="Cidade"
                    {...register("endereco.cidade")}
                    defaultValue={clienteData.endereco.cidade}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="bairro"
                    type="text"
                    className="validate"
                    placeholder="Bairro"
                    {...register("endereco.bairro")}
                    defaultValue={clienteData.endereco.bairro}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="rua"
                    type="text"
                    className="validate"
                    placeholder="Rua"
                    {...register("endereco.rua")}
                    defaultValue={clienteData.endereco.rua}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="numero"
                    type="number"
                    className="validate"
                    placeholder="Número"
                    {...register("endereco.numero")}
                    defaultValue={clienteData.endereco.numero}
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="codigoPostal"
                    type="text"
                    className="validate"
                    placeholder="Código Postal"
                    {...register("endereco.codigoPostal")}
                    defaultValue={clienteData.endereco.codigoPostal}
                  />
                </div>
                <div className="input-field col s6">
                  <textarea
                    id="informacoesAdicionais"
                    className="materialize-textarea"
                    placeholder="Informações Adicionais"
                    {...register("endereco.informacoesAdicionais")}
                    defaultValue={clienteData.endereco.informacoesAdicionais}
                  ></textarea>
                </div>
              </div>
              <button className="waves-effect waves-light btn botao" type="submit">
                Atualizar
              </button>
            </form>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Edicao;

