"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const PedidoRepository_1 = require("./../repositories/PedidoRepository");
class PedidoController {
    async createPedido(req, res) {
        // criar pedido
        const { material, prioridade, maquina, estado, arquivo, medida, id_horaDisponivel, id_autorPedido, id_autorAutorizador } = req.body;
        try {
            const newPedido = PedidoRepository_1.pedidoRepository.create({
                material,
                prioridade,
                maquina,
                estado,
                arquivo,
                medida,
                id_horaDisponivel,
                id_autorPedido,
                id_autorAutorizador
            });
            await PedidoRepository_1.pedidoRepository.save(newPedido);
            return res.status(201).json(newPedido);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.PedidoController = PedidoController;
