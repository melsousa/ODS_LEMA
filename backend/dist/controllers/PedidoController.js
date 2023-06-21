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
<<<<<<< HEAD
=======
=======
const fs_1 = __importDefault(require("fs"));
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
        const { material, maquina, cor, descricao, comentario, id_horaDisponivel, id_autorAutorizador, } = req.body;
        let prioridade = Pedido_1.Prioridade.baixa;
        let estado = Pedido_1.Estado.pendente;
        let arquivo;
        if (req.file) {
            arquivo = fs_1.default.readFileSync(req.file.path);
        }
<<<<<<< HEAD
        const pedido = new Pedido_1.Pedido(material, prioridade, maquina, estado, arquivo || Buffer.alloc(0), // Verificação adicional para garantir que arquivo seja um Buffer
        cor, descricao, comentario, Number(id_horaDisponivel), id, Number(id_autorAutorizador));
=======
        const pedido = new Pedido_1.Pedido(material, maquina, Pedido_1.Prioridade.baixa, Pedido_1.Estado.pendete, medida, arquivo ? arquivo.toString() : '', // Converte o Buffer para string      
        id_horaDisponivel, Number(id_autorPedido), id_autorAutorizador);
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
>>>>>>> Melissa
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
<<<<<<< HEAD
        const { material, maquina, medida } = req.body;
=======
        const { material, maquina, cor, descricao, comentario } = req.body;
>>>>>>> Melissa
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
<<<<<<< HEAD
        pedido.medida = medida || pedido.medida;
=======
        pedido.cor = cor || pedido.cor;
        pedido.descricao = descricao || pedido.descricao;
        pedido.comentario = comentario || pedido.comentario;
>>>>>>> Melissa
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
<<<<<<< HEAD
        await PedidoRepository_1.pedidoRepository.delete({ id_pedido: Number(id_pedido), id_autorPedido: id });
        return res.status(202).json("pedido deletado");
    }
    async getPedidosByEstado(req, res) {
        const { estado } = req.params;
=======
        await PedidoRepository_1.pedidoRepository.delete(id_pedido);
        return res.status(202).json("pedido deletado");
    }
    async getPedidosByEstado(req, res) {
        var _a;
        const { estado } = req.params;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error("Não autorizado");
        }
        // Verificando se o token existe e obtendo o ID do usuário
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const { id } = decodedToken;
        console.log(id);
>>>>>>> Melissa
        try {
            // Verifique se o estado fornecido é válido
            const estadoEnum = Object.values(Pedido_1.Estado).find((enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase());
            if (!estadoEnum) {
                throw new Error("Estado inválido");
            }
<<<<<<< HEAD
            const pedidos = await PedidoRepository_1.pedidoRepository.find({
                where: { estado: (0, typeorm_1.In)([estadoEnum]) },
            });
=======
            const pedidos = await PedidoRepository_1.pedidoRepository
                .createQueryBuilder("pedido")
                .where("pedido.id_autorPedido = :id_autorPedido", {
                id_autorPedido: id,
            })
                .andWhere("pedido.estado = :estado", { estado: estadoEnum })
                .getMany();
>>>>>>> Melissa
            return res.status(200).json(pedidos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
<<<<<<< HEAD
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
=======
>>>>>>> Melissa
}
exports.PedidoController = PedidoController;
