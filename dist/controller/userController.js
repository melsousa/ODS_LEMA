"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const orderRepositories_1 = require("../repositories/orderRepositories");
const userRepositories_1 = require("../repositories/userRepositories");
const Usuario_1 = require("../models/Usuario");
const Cargo_1 = require("../models/Cargo");
const Pedido_1 = require("../models/Pedido");
const horaDisponivel_1 = require("../models/horaDisponivel");
class UserController {
    async create(req, res) {
        // criando usuário
        const { nome, email, senha } = req.body;
        let user = new Usuario_1.Usuario(nome, email, senha, new Cargo_1.Cargo(1, "bolsista", null), null, null);
        if (nome) {
            return res.status(400).json({ message: "O nome é obrigatório" });
        }
        try {
            const newUser = userRepositories_1.userRepository.create(user);
            await userRepositories_1.userRepository.save(newUser);
            return res.status(201).json(newUser);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async createOrder(req, res) {
        const { orderUsername, startDate, endDate, printer, state } = req.body;
        const { id_user } = req.params;
        let pedido = new Pedido_1.Pedido(1, "PLA", Pedido_1.Prioridade.baixa, "3D", Pedido_1.Estado.pendete, new Buffer(undefined), "", new horaDisponivel_1.HoraDisponivel(), new Usuario_1.Usuario(nome, email, senha, new Cargo_1.Cargo(1, "bolsista", null), null, null), new Usuario_1.Usuario(nome, email, senha, new Cargo_1.Cargo(1, "bolsista", null), null, null));
        try {
            const idUser = await userRepositories_1.userRepository.findOne({ where: { id: Number(id_user) } });
            if (!idUser) {
                return res.status(404).json({ message: "Não existe esse usuário" });
            }
            const newOrder = orderRepositories_1.OrderRepository.create(pedido);
            await orderRepositories_1.OrderRepository.save(newOrder);
            return res.status(201).json(newOrder);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.UserController = UserController;
