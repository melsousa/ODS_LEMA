"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
const Usuario_1 = require("./entities/Usuario");
const Pedido_1 = require("./entities/Pedido");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Cargo_1 = require("./entities/Cargo");
const HoraDisponivel_1 = require("./entities/HoraDisponivel");
const PedidoAnonimo_1 = require("./entities/PedidoAnonimo");
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Usuario_1.Usuario, Pedido_1.Pedido, Cargo_1.Cargo, HoraDisponivel_1.HoraDisponivel, PedidoAnonimo_1.PedidoAnonimo],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    "synchronize": true,
    "logging": false
});
exports.AppDataSource.initialize().then(() => {
    console.log("data source has been initialized!");
})
    .catch((err) => {
    console.error(err);
    console.log(result);
});
