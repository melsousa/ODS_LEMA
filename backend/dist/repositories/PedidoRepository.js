"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoRepository = void 0;
<<<<<<< HEAD
const Pedido_1 = require("./../entities/Pedido");
const data_source_1 = require("./../data-source");
exports.pedidoRepository = data_source_1.AppDataSource.getRepository(Pedido_1.Pedido);
=======
const Pedido_entities_1 = require("../entities/Pedido.entities");
const data_source_1 = require("./../data-source");
exports.pedidoRepository = data_source_1.AppDataSource.getRepository(Pedido_entities_1.Pedido);
>>>>>>> origin/Melissa
