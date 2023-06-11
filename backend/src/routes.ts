import { PedidoAnonimoController } from './controllers/PedidoAnonimoController';
import { HorarioController } from './controllers/HorarioController';
import { CargoController } from './controllers/CargoController';
import { PedidoController } from './controllers/PedidoController';
import { UsuarioController } from "./controllers/UsuarioController";
import { Router } from "express";
import { autenticaoToken } from './middlewares/autenticacaoToken';
// import { adminController } from './controllers/adminController';
import { pedidoRepository } from './repositories/PedidoRepository';

import { upload } from "./uploadMiddleware"; // Importar o middleware de upload de arquivos

const routes = Router();

// USUÁRIO

// Login Usuario
routes.post("/login", new UsuarioController().login);

// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);


// HORÁRIO

// criar horário
routes.post("/horario/create", new HorarioController().createHorario)
// 
routes.get("/horario/get", new HorarioController().listHorarios)

// CARGO

// criar cargo
routes.post("/cargo", new CargoController().createCargo);


routes.use(autenticaoToken)

// USUÁRIO 

//Buscanco informações do usuário
routes.get("/profile", new UsuarioController().getProfile)

// Atualizar usuário
routes.put("/user/update", new UsuarioController().updateUser)

// Deletar usuário
routes.delete("/user/delete", new UsuarioController().deleteUser)

//a partir daqui tds as rotas so sao acessadas apenas com a token

// routes.get("/adminPedidos/estado_pedido=:estado", new adminController().readPedidos)
// //retornar os pedidos a partir do estado
// routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController().updatePedidos)
// //atualiza o pedido apartir do id
// routes.post("/adminPedidos", new adminController().user)



// PEDIDO ANÔNIMO

// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController().createPedidoAnonimo);

// PEDIDO COM USUÁRIO

// Cadastro de pedido
routes.post("/pedido", upload.single("arquivo"), new PedidoController().createPedido);

// routes.post( "/pedido", new PedidoController().createPedido);
routes.get("/pedido/get", new PedidoController().getPedidosByUsuario)

routes.put("/pedido/update/:id_pedido", new PedidoController().updatePedido)

routes.delete("/pedido/delete/:id_pedido", new PedidoController().deletePedido)

routes.get("/pedido/estado/:estado", new PedidoController().getPedidosByEstado);

export default routes;
