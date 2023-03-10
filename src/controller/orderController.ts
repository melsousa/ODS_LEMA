import { Request, Response } from "express";
import { Pedido } from "../models/Pedido";
import { OrderRepository } from "../repositories/orderRepositories";
export class OrderController {
  async create(req: Request, res: Response) {
    const { orderUsername, startDate, endDate, printer, state } = req.body;
    const {id_user} = req.params
    let pedido: Pedido
    try {
      const newOrder = OrderRepository.create();
      
      await OrderRepository.save(newOrder);

      return res.status(201).json(newOrder);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
