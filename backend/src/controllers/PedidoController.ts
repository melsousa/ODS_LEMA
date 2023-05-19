import { Pedido } from "../models/Pedido";
import { pedidoRepository } from "./../repositories/PedidoRepository";
import { Request, Response } from "express";
import fs from 'fs'

export class PedidoController {
  async createPedido(req: Request, res: Response) {
    // criar pedido
    const {
      material,
      prioridade,
      maquina,
      arquivo,
      medida,
      id_horaDisponivel,
      id_autorAutorizador,
    } = req.body;

    const { id_autorPedido } = req.params;
    
    
    const pedido = new Pedido(material,
      prioridade, 
      maquina, 
      arquivo, 
      medida, 
      id_horaDisponivel, 
      Number(id_autorPedido), 
      id_autorAutorizador)

      const novoPedido = pedidoRepository.create(pedido);

      await pedidoRepository.save(novoPedido);

      return res.status(201).json(novoPedido);
    
  }
  

  async updatePedido(req: Request, res: Response) {
    // const {id_pedido}
    try {
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}