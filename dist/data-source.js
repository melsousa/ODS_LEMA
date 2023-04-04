"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const PedidoAnonimo_1 = require("./entities/PedidoAnonimo");
const Usuario_1 = require("./entities/Usuario");
const Pedido_1 = require("./entities/Pedido");
const HoraDisponivel_1 = require("./entities/HoraDisponivel");
const Cargo_1 = require("./entities/Cargo");
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _1679541259198_default_1 = require("./migrations/1679541259198-default");
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Cargo_1.Cargo, HoraDisponivel_1.HoraDisponivel, Pedido_1.Pedido, Usuario_1.Usuario, PedidoAnonimo_1.PedidoAnonimo],
    migrations: [_1679541259198_default_1.default1679541259198],
    subscribers: []
});
exports.AppDataSource.initialize();
