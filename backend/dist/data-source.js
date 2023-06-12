"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const PedidoAnonimo_entites_1 = require("./entities/PedidoAnonimo.entites");
const Usuario_entities_1 = require("./entities/Usuario.entities");
const Pedido_entities_1 = require("./entities/Pedido.entities");
const HoraDisponivel_entities_1 = require("./entities/HoraDisponivel.entities");
const Cargo_entities_1 = require("./entities/Cargo.entities");
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _1679541259198_default_1 = require("./migrations/1679541259198-default");
const _1683754239343_default_1 = require("./migrations/1683754239343-default");
const _1686339665727_default_1 = require("./migrations/1686339665727-default");
const _1686340715551_default_1 = require("./migrations/1686340715551-default");
const _1686353144656_default_1 = require("./migrations/1686353144656-default");
const _1686353476865_default_1 = require("./migrations/1686353476865-default");
const _1686353972801_default_1 = require("./migrations/1686353972801-default");
const _1686355895579_default_1 = require("./migrations/1686355895579-default");
const _1686421422676_default_1 = require("./migrations/1686421422676-default");
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Cargo_entities_1.Cargo, HoraDisponivel_entities_1.HoraDisponivel, Pedido_entities_1.Pedido, Usuario_entities_1.Usuario, PedidoAnonimo_entites_1.PedidoAnonimo],
    migrations: [_1679541259198_default_1.default1679541259198, _1683754239343_default_1.default1683754239343, _1686339665727_default_1.default1686339665727,
        _1686340715551_default_1.default1686340715551, _1686353144656_default_1.default1686353144656, _1686353476865_default_1.default1686353476865, _1686353972801_default_1.default1686353972801,
        _1686355895579_default_1.default1686355895579, _1686421422676_default_1.default1686421422676],
    subscribers: []
});
exports.AppDataSource.initialize();
