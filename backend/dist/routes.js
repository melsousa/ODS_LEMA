"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
routes.post("/cargo", new CargoController_1.CargoController().createCargo);
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
// routes.post("/user/:id_user/create", new PedidoController().createPedido)
exports.default = routes;
