import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        //Nome
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        //Genero
        let genero = this.entrada.receberTexto(`Por favor informe o seu gênero, no padrão Feminino/Masculino: `)

        //CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf)

        //RG
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rgs = new RG(valorRg, dataEmissaoRg);
        cliente.getRgs.push(rgs)
        

        //Telefone
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `) 
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `)
        let telefone = new Telefone (ddd, numero)
        cliente.getTelefones.push(telefone)

        //Cadastro cliente
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}