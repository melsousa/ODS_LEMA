"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const PedidoRepository_1 = require("./../repositories/PedidoRepository");
<<<<<<< HEAD
=======
const api_erros_1 = require("../helpers/api-erros");
>>>>>>> origin/Melissa
// import { Usuario } from "../entities/Usuario";
class PedidoController {
    async createPedido(req, res) {
        // criar pedido
        const { material, prioridade, maquina, estado, arquivo, medida, id_horaDisponivel, id_autorAutorizador, } = req.body;
        const { id_autorPedido } = req.params;
<<<<<<< HEAD
        try {
            const pedido = await PedidoRepository_1.pedidoRepository.findOneBy({
                id_pedido: Number(id_autorPedido),
            });
            // if(!pedido){
            //   return res.status(404).json({message: 'Usuário não existe' }) //refazer a verificação
            // }
            const novoPedido = PedidoRepository_1.pedidoRepository.create({
                material,
                prioridade,
                maquina,
                estado,
                arquivo,
                medida,
                id_autorPedido: { id_usuario: Number(id_autorPedido) },
                id_autorAutorizador,
                id_horaDisponivel: { id_hora: id_horaDisponivel }, // corrigido aqui
            });
            await PedidoRepository_1.pedidoRepository.save(novoPedido);
            return res.status(201).json(novoPedido);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
=======
        const pedido = await PedidoRepository_1.pedidoRepository.findOneBy({
            id_pedido: Number(id_autorPedido),
        });
        if (!pedido) {
            throw new api_erros_1.BadRequestError("Pedido não existe");
        }
        const novoPedido = PedidoRepository_1.pedidoRepository.create({
            material,
            prioridade,
            maquina,
            estado,
            arquivo,
            medida,
            id_autorPedido: { id_usuario: Number(id_autorPedido) },
            id_autorAutorizador,
            id_horaDisponivel: { id_hora: id_horaDisponivel }, // corrigido aqui
        });
        await PedidoRepository_1.pedidoRepository.save(novoPedido);
        return res.status(201).json(novoPedido);
>>>>>>> origin/Melissa
    }
    async updatePedido(req, res) {
        // const {id_pedido}
        try {
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.PedidoController = PedidoController;
