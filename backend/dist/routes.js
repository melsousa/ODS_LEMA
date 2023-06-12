"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoAnonimoController_1 = require("./controllers/PedidoAnonimoController");
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const PedidoController_1 = require("./controllers/PedidoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const express_1 = require("express");
const autenticacaoToken_1 = require("./middlewares/autenticacaoToken");
const uploadMiddleware_1 = require("./uploadMiddleware"); // Importar o middleware de upload de arquivos
const routes = (0, express_1.Router)();
// Login Usuario
routes.post("/login", new UsuarioController_1.UsuarioController().login);
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
// Cadastro de usuário
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
routes.use(autenticacaoToken_1.autenticaoToken);
//a partir daqui tds as rotas so sao acessadas apenas com a token
// routes.get("/adminPedidos/estado_pedido=:estado", new adminController().readPedidos)
// //retornar os pedidos a partir do estado
// routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController().updatePedidos)
// //atualiza o pedido apartir do id
// routes.post("/adminPedidos", new adminController().user)
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Cadastro de cargo
routes.post("/cargo", new CargoController_1.CargoController().createCargo);
// Cadastro de horário
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// Cadastro de pedido
routes.post("/pedido", uploadMiddleware_1.upload.single("arquivo"), new PedidoController_1.PedidoController().createPedido);
// routes.post( "/pedido", new PedidoController().createPedido);
routes.get("/pedido", new PedidoController_1.PedidoController().readPedido);
routes.put("/pedido", new PedidoController_1.PedidoController().updatePedido);
routes.delete("/pedido", new PedidoController_1.PedidoController().deletePedido);
exports.default = routes;
