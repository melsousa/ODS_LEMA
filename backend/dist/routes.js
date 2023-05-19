"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoAnonimoController_1 = require("./controllers/PedidoAnonimoController");
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const PedidoController_1 = require("./controllers/PedidoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const express_1 = require("express");
const autenticacaoToken_1 = require("./middlewares/autenticacaoToken");
const adminController_1 = require("./controllers/adminController");
const routes = (0, express_1.Router)();
// Login Usuario
routes.post("/login", new UsuarioController_1.UsuarioController().login);
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
// Cadastro de usuário
routes.use(autenticacaoToken_1.autenticaoToken);
//a partir daqui tds as rotas so sao acessadas apenas com a token
routes.get("/adminPedidos/estado_pedido=:estado", new adminController_1.adminController().readPedidos);
//retornar os pedidos a partir do estado
routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController_1.adminController().updatePedidos);
//atualiza o pedido apartir do id
routes.post("/adminPedidos", new adminController_1.adminController().user);
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Cadastro de cargo
routes.post("/cargo", new CargoController_1.CargoController().createCargo);
// Cadastro de horário
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// Cadastro de pedido com login
routes.post("/pedido/:id_autorPedido/create", new PedidoController_1.PedidoController().createPedido);
exports.default = routes;
