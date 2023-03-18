"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const router_1 = __importDefault(require("./router"));
const dotenv = __importStar(require("dotenv"));
const result = dotenv.config();
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(router_1.default);
    console.log(`executando em localhost:${process.env.PORT}`);
    console.log(`resultado variavel de ambiente ${result.error}`);
    return app.listen(process.env.PORT);
});
// import { Cargo } from "./models/Cargo";
// import { Pedido } from "./models/Pedido";
// import { Usuario } from "./models/Usuario";
// let usuario = new Usuario("gabriel", 
//               "gabriel.silva.pimentel08@aluno.ifce.edu.br",
//               "G1a2b3r4i5e6l7,.",
//               new Cargo(1, "bolsista", null),
//               null, null)
// console.log(usuario)
