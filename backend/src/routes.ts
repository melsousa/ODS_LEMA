import { PedidoAnonimoController } from './controllers/PedidoAnonimoController';
import { HorarioController } from './controllers/HorarioController';
import { CargoController } from './controllers/CargoController';
import { PedidoController } from './controllers/PedidoController';
import { UsuarioController } from "./controllers/UsuarioController";
import { Router } from "express";
import { autenticacaoAdmin, autenticaoToken } from './middlewares/autenticacaoToken';
import { adminController } from './controllers/adminController';
import { pedidoRepository } from './repositories/PedidoRepository';

const routes = Router();

// Login Usuario
routes.post("/login", new UsuarioController().login);
// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);



routes.use(autenticaoToken)
//a partir daqui tds as rotas so sao acessadas apenas com a token




//Buscanco informações do usuário
routes.get("/profile", new UsuarioController().getProfile)

// Cadastro de cargo
routes.post("/cargo", new CargoController().createCargo);

// Cadastro de horário
routes.post("/horario", new HorarioController().createHorario);

// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController().createPedidoAnonimo);

// Cadastro de pedido
routes.post( "/pedido", new PedidoController().createPedido) //cria
routes.get("/pedido", new PedidoController().readPedido) //pega
routes.put("/pedido", new PedidoController().updatePedido) //modifica estado
routes.delete("/pedido", new PedidoController().deletePedido) //exclui

//rotas que sao acessadas pelo root
routes.use(autenticacaoAdmin)

routes.get("/adminPedidos/estado_pedido=:estado", new adminController().readPedidos)
//retornar os pedidos a partir do estado
routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController().updatePedidos)
//atualiza o pedido apartir do id
routes.post("/adminPedidos", new adminController().user)
export default routes;