import { OrderRepository } from '../repositories/orderRepositories';
import { userRepository } from "../repositories/userRepositories";
import { Request, Response } from "express";
import { Usuario } from '../models/Usuario';
import { Cargo } from '../models/Cargo';
import { Estado, Pedido, Prioridade } from '../models/Pedido';
import { HoraDisponivel } from '../models/horaDisponivel';


export class UserController {
  async create(req: Request, res: Response) {
    // criando usuário
    const { nome, email, senha } = req.body;
    //new Usuario(nome, email, senha, new Cargo(1, "bolsista", null), null, null)
    if (nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }

    try {
      const newUser = userRepository.create();
      await userRepository.save(newUser);

      return res.status(201).json(newUser);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createOrder(req: Request, res: Response) {
    const { orderUsername, startDate, endDate, printer, state } = req.body;
    
    const { id_user } = req.params;
    // let pedido = new Pedido(1, "PLA", Prioridade.baixa, "3D",
    //                         Estado.pendete, new Buffer(undefined), "", new HoraDisponivel(), 
    //                         new Usuario(nome, email, senha, new Cargo(1, "bolsista", null), null, null),
    //                         new Usuario(nome, email, senha, new Cargo(1, "bolsista", null), null, null)
    //                         )
    try {
      const idUser = await userRepository.findOne({where: {id: Number(id_user)} });

      if (!idUser) {
        return res.status(404).json({ message: "Não existe esse usuário" });
      }

      const newOrder = OrderRepository.create()

      await OrderRepository.save(newOrder)

      return res.status(201).json(newOrder)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
