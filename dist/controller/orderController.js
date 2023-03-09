"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const Pedido_1 = require("../models/Pedido");
const orderRepositories_1 = require("../repositories/orderRepositories");
class OrderController {
    async create(req, res) {
        const { orderUsername, startDate, endDate, printer, state } = req.body;
        const { id_user } = req.params;
        let pedido = new Pedido_1.Pedido();
        try {
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
exports.OrderController = OrderController;
