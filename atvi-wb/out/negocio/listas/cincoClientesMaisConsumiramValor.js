"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var CincoClientesMaisConsumiramValor = /** @class */ (function (_super) {
    __extends(CincoClientesMaisConsumiramValor, _super);
    function CincoClientesMaisConsumiramValor(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    CincoClientesMaisConsumiramValor.prototype.listar = function () {
        console.log("\nOs 5 clientes que mais consumiram em valor:");
        var produtos = [];
        var servicos = [];
        this.produtos.forEach(function (produto) {
            produtos.push(produto);
        });
        this.servicos.forEach(function (servico) {
            servicos.push(servico);
        });
        this.clientes.forEach(function (cliente) {
            var precoPedido = 0;
            cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                for (var index = 0; index < produtos.length; index++) {
                    if (produtos[index].nomeProduto == prodConsumido.nomeProduto) {
                        precoPedido += produtos[index].precoProduto;
                    }
                }
            });
            cliente.getServicosConsumidos.forEach(function (servConsumido) {
                for (var indexS = 0; indexS < servicos.length; indexS++) {
                    if (servicos[indexS].nomeServico == servConsumido.nomeServico) {
                        precoPedido += servicos[indexS].precoServico;
                    }
                }
            });
            cliente.precoPedido = precoPedido;
        });
        this.clientes.sort(function (precoPedido1, precoPedido2) { return (precoPedido1.precoPedido > precoPedido2.precoPedido) ? -1 : 1; });
        var ordemPedido = 1;
        if (this.clientes.length > 5) {
            for (var i = 0; i < 5; i++) {
                this.clientes.forEach(function (preco) {
                    console.log("".concat(ordemPedido, " - ").concat(preco.nome, ": ").concat(preco.precoPedido));
                    ordemPedido++;
                });
            }
        }
        else {
            this.clientes.forEach(function (preco) {
                console.log("".concat(ordemPedido, " - ").concat(preco.nome, ": ").concat(preco.precoPedido));
                ordemPedido++;
            });
        }
    };
    return CincoClientesMaisConsumiramValor;
}(listagem_1.default));
exports.default = CincoClientesMaisConsumiramValor;
