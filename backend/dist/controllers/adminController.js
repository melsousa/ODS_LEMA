"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const PedidoRepository_1 = require("../repositories/PedidoRepository");
const Pedido_entities_1 = require("../entities/Pedido.entities");
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
class adminController {
    async readPedidos(req, res) {
        const { estado } = req.params;
        console.log(estado);
        //retornar todos os pedidos
        const pedidos = await PedidoRepository_1.pedidoRepository.find();
        //nesse caso ele vai retornar toda a tabela
        const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado);
        //e depois filtar apenas o que o usuario vai querer
        console.log(pedidoFiltrado);
        return res.status(200).json(pedidoFiltrado);
        //OBS: essa nao e a forma mais performatica, porem e a mais legivel e limpa q eu consegui fazer
        //att. gabriel!!
    }
    async updatePedidos(req, res) {
        const { id_pedido } = req.params;
        //vai pegar o id
        const estado = req.body;
        //pega o estado que quer trocar
        let pedidoRetornado = await PedidoRepository_1.pedidoRepository.findOneBy({ id_pedido: Number(id_pedido) });
        //pega a linha que vai ser alterada
        const pedido = await PedidoRepository_1.pedidoRepository.createQueryBuilder().update(Pedido_entities_1.Pedido).set({ estado: estado })
            .where({ id_pedido: id_pedido })
            .execute();
        //faz alteracao do estado
        pedidoRetornado = await PedidoRepository_1.pedidoRepository.findOneBy({ id_pedido: Number(id_pedido) });
        //pedido ja alterado
        if (pedidoRetornado != null) {
            pedido.generatedMaps = [Object(estado)];
            pedido.raw = pedidoRetornado;
        }
        else {
            return res.status(404).json('pedido não encontrado');
        }
        //incluo no retorno a linha como era antes da alteracao
        return res.status(201).json(pedido);
    }
    async user(req, res) {
        const user = await UsuarioRepository_1.usuarioRepository.find();
        console.log(user);
        return res.status(200).json(user);
    }
}
exports.adminController = adminController;
