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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const Pedido_1 = require("../models/Pedido");
const PedidoRepository_1 = require("./../repositories/PedidoRepository");
const jwt = __importStar(require("jsonwebtoken"));
class PedidoController {
    async createPedido(req, res) {
        // criar pedido
        const { material, prioridade, maquina, arquivo, medida, id_horaDisponivel, id_autorAutorizador, } = req.body;
        const { id_autorPedido } = req.params;
        const pedido = new Pedido_1.Pedido(material, prioridade, maquina, arquivo, medida, id_horaDisponivel, Number(id_autorPedido), id_autorAutorizador);
        const novoPedido = PedidoRepository_1.pedidoRepository.create(pedido);
        await PedidoRepository_1.pedidoRepository.save(novoPedido);
        return res.status(201).json(novoPedido);
    }
    async updatePedido(req, res) {
        const { id_pedido } = req.body;
        try {
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async readPedido(req, res) {
        var _a;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        const token = authorization.split(" ")[1];
        const { id_usuario } = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const pedidos = await PedidoRepository_1.pedidoRepository.find({
            where: { id_autorPedido: id_usuario }
        });
        return res.status(200).json(pedidos);
    }
    async deletePedido(req, res) {
        var _a;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        const token = authorization.split(" ")[1];
        const { id_usuario } = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const pedidos = await PedidoRepository_1.pedidoRepository.delete(id_usuario);
        if (pedidos) {
            return res.status(202).json("pedido deletado");
        }
        else {
            return res.status(204).json("pedido nao deletado");
        }
    }
}
exports.PedidoController = PedidoController;
