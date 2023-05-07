import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/PedidoRepository";
import { Estado} from "../models/Pedido";
import { Pedido } from "../entities/Pedido.entities";
import { Pedido as Mpedido } from "../models/Pedido";

export class adminController {

    async readPedidos (req: Request, res: Response) {
        
        const {estado} = req.params
        console.log(estado)
        //retornar todos os pedidos

        const pedidos = await pedidoRepository.find()
        //nesse caso ele vai retornar toda a tabela

        const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado)
        //e depois filtar apenas o que o usuario vai querer
        
        console.log(pedidoFiltrado)


        return res.status(200).json(pedidoFiltrado)
        
        
     //OBS: essa nao e a forma mais performatica, porem e a mais legivel e limpa q eu consegui fazer
     //att. gabriel!!
        
    }

    async updatePedidos (req: Request, res: Response) {
        const {id_pedido} = req.params
        //vai pegar o id
        const {estado} = req.body
        //pega o estado que quer trocar
        let pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
       //pega a linha que vai ser alterada

        const pedido = await pedidoRepository.createQueryBuilder().update(Pedido).set({estado: estado})
        .where({ id_pedido: id_pedido })
        .execute()
        //faz alteracao do estado

        
        if(pedidoRetornado!=null)
        {
            pedido.generatedMaps = [pedidoRetornado.estado, Object(estado)]
            pedido.raw = pedidoRetornado
        }

        //incluo no retorno a linha como era antes da alteracao

        return res.status(201).json(pedido)
    }


}