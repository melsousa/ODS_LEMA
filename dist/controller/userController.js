"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const orderRepositories_1 = require("../repositories/orderRepositories");
const userRepositories_1 = require("../repositories/userRepositories");
class UserController {
    async create(req, res) {
        const { name, email, password } = req.body;
        if (name) {
            return res.status(400).json({ message: "O nome é obrigatório" });
        }
        try {
            const newUser = userRepositories_1.userRepository.create({
                name,
                email,
                password,
            });
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
        try {
            const idUser = await userRepositories_1.userRepository.findOne({ where: { id: Number(id_user) } });
            if (!idUser) {
                return res.status(404).json({ message: "Não existe esse usuário" });
            }
            const newOrder = orderRepositories_1.OrderRepository.create({
                orderUsername,
                startDate,
                endDate,
                printer,
                state,
                idUser
            });
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
