import { error } from "console";
import { Pedido } from "../models/Pedido";
import { pedidoRepository } from "./../repositories/PedidoRepository";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import { usuarioRepository } from "../repositories/UsuarioRepository";
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
    const {id_pedido} = req.body

    try {
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async readPedido(req: Request, res: Response) {
    const {authorization} = req.headers
    if (!authorization) {
      throw new Error("Não autorizado");
    }

    const token = authorization.split(" ")[1]
    
    
    const { id_usuario } = jwt.verify(
      token,
      process.env.JWT_PASS ?? ""
    ) as jwt.JwtPayload;

    const pedidos = await pedidoRepository.find({
      where: {id_autorPedido: id_usuario}
    })

    return res.status(200).json(pedidos)

  }

  async deletePedido(req: Request, res: Response) {
    const {authorization} = req.headers
    
    if (!authorization) {
      throw new Error("Não autorizado");
    }

    const token = authorization.split(" ")[1]
    
    
    const { id_usuario } = jwt.verify(
      token,
      process.env.JWT_PASS ?? ""
    ) as jwt.JwtPayload;

    const pedidos = await pedidoRepository.delete(id_usuario)
    if(pedidos) {
      return res.status(202).json("pedido deletado")
    } else {
      return res.status(204).json("pedido nao deletado")
    }
    
  }

}