import express from "express";

import { 
  listagemTodosClientes,
  retornoCliente,
  criarCliente,
  excluirCliente,
  editarCliente
} from "../controllers/Cliente";

const router = express.Router();

router.get('/clientes', listagemTodosClientes);
router.get('/cliente/:id', retornoCliente);
router.post('/cliente/cadastrar',  criarCliente);
router.put('/cliente/edite/:id', editarCliente);
router.delete('/clientes/excluir/:id', excluirCliente);

export default router;
