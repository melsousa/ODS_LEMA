import { pedidoRepository } from './../repositories/PedidoRepository';
import { Request, Response } from 'express';
export class PedidoController {
  async createPedido(req: Request, res: Response) {
    // criar pedido
    const {
      material,
      prioridade,
      maquina,
      estado,
      arquivo,
      medida,
      id_horaDisponivel,
      id_autorPedido,
      id_autorAutorizador
    } = req.body;

    try {
      const newPedido = pedidoRepository.create({
        material,
        prioridade,
        maquina,
        estado,
        arquivo, 
        medida,
        id_horaDisponivel,
        id_autorPedido,
        id_autorAutorizador
      })

      await pedidoRepository.save(newPedido)

      return res.status(201).json(newPedido)

    }catch(error){
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error"})
      
    }
  }
}