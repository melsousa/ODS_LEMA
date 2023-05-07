import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/PedidoRepository";



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
        
        
     //OBS: essa nao e a forma mais performatica, porem e a mais legivel, limpa q eu consegui fazer
     //add. gabriel!!
        
    }


}