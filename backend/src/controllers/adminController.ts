import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/PedidoRepository";
import { Pedido } from "../entities/Pedido.entities";
import { Estado } from "../models/Pedido";
import { usuarioRepository } from "../repositories/UsuarioRepository";

export class adminController {

    async readPedidos (req: Request, res: Response) {
        
        const {estado} = req.params
        // console.log(estado)
        //retornar todos os pedidos
        const pedidos = Object.values(Estado).find(
            (enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase()
        );
        // const pedidos = await pedidoRepository.find({
        //     where: {estado: estado,}
        // })
        //nesse caso ele vai retornar toda a tabela

        //const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado)
        //e depois filtar apenas o que o usuario vai querer
        
        console.log(pedidos)


        return res.status(200).json(pedidos)
        
        
    
        
    }

    async updatePedidos (req: Request, res: Response) {
        const {id_pedido} = req.params
        //vai pegar o id
        const {estado} = req.body

        //pega o estado que quer trocar
        let pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
       //pega a linha que vai ser alterada

       const pedido = await pedidoRepository.createQueryBuilder().update(Pedido).set({ estado }).where({ id_pedido: Number(id_pedido) }).execute();
        

        //faz alteracao do estado
        pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
        //pedido ja alterado

        if(pedidoRetornado!=null)
        {
            pedido.generatedMaps = [Object(estado)]
            pedido.raw = pedidoRetornado
        } else {
            return res.status(404).json('pedido não encontrado')
        }

        //incluo no retorno a linha como era antes da alteracao

        return res.status(201).json(pedido)
    }
    
    async user (req: Request, res: Response) {

        const user = await usuarioRepository.find()
        return res.status(200).json(user)
    }


}