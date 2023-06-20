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
const typeorm_1 = require("typeorm");
class PedidoController {
    async createPedido(req, res) {
        var _a;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        // Verificando se o token existe e obtendo o ID do usuário
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const { id } = decodedToken;
        // Dados do pedido
        const { material, prioridade, maquina, arquivo, medida, id_horaDisponivel, id_autorAutorizador, } = req.body;
        const { id_autorPedido } = req.params;
        const pedido = new Pedido_1.Pedido(material, prioridade, maquina, arquivo, medida, id_horaDisponivel, Number(id_autorPedido), id_autorAutorizador);
        const novoPedido = PedidoRepository_1.pedidoRepository.create(pedido);
        await PedidoRepository_1.pedidoRepository.save(novoPedido);
        return res.status(201).json(novoPedido);
    }
    async getPedidosByUsuario(req, res) {
        var _a;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        // Verificando se o token existe e obtendo o ID do usuário
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const { id } = decodedToken;
        console.log(id);
        // Obtendo os pedidos vinculados ao usuário logado
        const pedidos = await PedidoRepository_1.pedidoRepository
            .createQueryBuilder("pedido")
            .where("pedido.id_autorPedido = :id_autorPedido", { id_autorPedido: id })
            .getMany();
        return res.status(200).json(pedidos);
    }
    async updatePedido(req, res) {
        var _a;
        const { authorization } = req.headers;
        const { id_pedido } = req.params;
        const { material, maquina, medida } = req.body;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        // verificando se o token existe
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const { id } = decodedToken;
        const pedido = await PedidoRepository_1.pedidoRepository.findOne({
            where: { id_pedido: Number(id_pedido), id_autorPedido: id },
        });
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        if (pedido.estado.toString().toLowerCase() !== Pedido_1.Estado.pendente) {
            throw new Error("O pedido não pode ser excluído porque não está no estado 'pendente'");
        }
        pedido.material = material || pedido.material;
        pedido.maquina = maquina || pedido.maquina;
        pedido.medida = medida || pedido.medida;
        await PedidoRepository_1.pedidoRepository.save(pedido);
        return res.status(200).json(pedido);
    }
    async deletePedido(req, res) {
        var _a;
        const { authorization } = req.headers;
        const { id_pedido } = req.params;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        // Verificando se o token existe e obtendo o ID do usuário
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const { id } = decodedToken;
        // Verificando se o pedido existe e se o estado é "pendente"
        const pedido = await PedidoRepository_1.pedidoRepository.findOne({
            where: { id_pedido: Number(id_pedido), id_autorPedido: id },
        });
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        if (pedido.estado.toString().toLowerCase() !== Pedido_1.Estado.pendente) {
            throw new Error("O pedido não pode ser atualizado porque não está no estado 'pendente'");
        }
        // Excluindo o pedido
        await PedidoRepository_1.pedidoRepository.delete({ id_pedido: Number(id_pedido), id_autorPedido: id });
        return res.status(202).json("pedido deletado");
    }
    async getPedidosByEstado(req, res) {
        const { estado } = req.params;
        try {
            // Verifique se o estado fornecido é válido
            const estadoEnum = Object.values(Pedido_1.Estado).find((enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase());
            if (!estadoEnum) {
                throw new Error("Estado inválido");
            }
            const pedidos = await PedidoRepository_1.pedidoRepository.find({
                where: { estado: (0, typeorm_1.In)([estadoEnum]) },
            });
            return res.status(200).json(pedidos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    //busca todos os pedidos do usuario que ta logado
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
}
exports.PedidoController = PedidoController;
