"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoAnonimoController_1 = require("./controllers/PedidoAnonimoController");
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const PedidoController_1 = require("./controllers/PedidoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const adminController_1 = require("./controllers/adminController");
const express_1 = require("express");
const autenticacaoToken_1 = require("./middlewares/autenticacaoToken");
const routes = (0, express_1.Router)();
// PEDIDO ANÔNIMO
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo/create", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// lista de todos os pedidos
routes.get("/pedidoanonimo/get", new PedidoAnonimoController_1.PedidoAnonimoController().listPedidosAnonimos);
routes.get("/pedidoanonimo/geteste", new PedidoAnonimoController_1.PedidoAnonimoController().listPedidosAnonimosT);
// lista pelo código do pedido
routes.get("/pedidoanonimo/getPedidoByCodigo/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().getPedidoByCodigo);
// update pedido pelo código
routes.put("/pedidoanonimo/update/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().updatePedido);
// delete pedido pelo código
routes.delete("/pedidoanonimo/delete/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().deletePedido);
// USUÁRIO
// Login Usuario
routes.post("/login", new UsuarioController_1.UsuarioController().login);
// Cadastro de usuário
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
//a partir daqui tds as rotas so sao acessadas apenas com a token
routes.use(autenticacaoToken_1.autenticaoToken);
// USUÁRIO 
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Atualizar usuário
routes.put("/user/update", new UsuarioController_1.UsuarioController().updateUser);
// Deletar usuário
routes.delete("/user/delete", new UsuarioController_1.UsuarioController().deleteUser);
// HORÁRIO
// criar horário
routes.post("/horario/create", new HorarioController_1.HorarioController().createHorario);
// lista todos os horários 
routes.get("/horario/get", new HorarioController_1.HorarioController().listHorarios);
// lista horario por id
routes.get("/horario/getById/:id_horario", new HorarioController_1.HorarioController().getHorarioById);
// update horário por id
routes.put("/horario/update/:id_horario", new HorarioController_1.HorarioController().updateHorario);
//delete horário por id
routes.delete("/horario/delete/:id_horario", new HorarioController_1.HorarioController().deleteHorario);
// PEDIDO COM USUÁRIO
// Cadastro de pedido
routes.post("/pedido/create", new PedidoController_1.PedidoController().createPedido);
// routes.post( "/pedido", new PedidoController().createPedido);
routes.get("/pedido/get", new PedidoController_1.PedidoController().getPedidosByUsuario);
routes.put("/pedido/update/:id_pedido", new PedidoController_1.PedidoController().updatePedido);
routes.delete("/pedido/delete/:id_pedido", new PedidoController_1.PedidoController().deletePedido);
routes.get("/pedido/estado/:estado", new PedidoController_1.PedidoController().getPedidosByEstado);
// CARGO
// criar cargo
routes.post("/cargo/create", new CargoController_1.CargoController().createCargo);
// listar cargos
routes.get("/cargo/get", new CargoController_1.CargoController().listCargos);
// listar cargo por id
routes.get("/cargo/get/:id_cargo", new CargoController_1.CargoController().getCargoById);
// update cargo
routes.put("/cargo/update/:id_cargo", new CargoController_1.CargoController().updateCargo);
routes.delete("/cargo/delete/:id_cargo", new CargoController_1.CargoController().deleteCargo);
//rotas que sao acessadas pelo root
routes.use(autenticacaoToken_1.adminAutenticacao);
routes.get("/adminPedidos/estado_pedido=:estado", new adminController_1.adminController().readPedidos);
//retornar os pedidos a partir do estado
routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController_1.adminController().updatePedidos);
//atualiza o pedido apartir do id
routes.get("/adminUser/listUser/", new adminController_1.adminController().listUser);
routes.get("/adminUser/listUser/:id_usuario", new adminController_1.adminController().listUser);
routes.delete("/adminUser/delete/:id_usuario", new adminController_1.adminController().deleteUser);
//routes.put("adminUser/update/id_usuario")
exports.default = routes;
