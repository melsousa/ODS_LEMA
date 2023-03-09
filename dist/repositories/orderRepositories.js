"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const Pedido_1 = require("../models/Pedido");
const data_source_1 = require("../data-source");
exports.OrderRepository = data_source_1.AppDataSource.getRepository(Pedido_1.Pedido);
