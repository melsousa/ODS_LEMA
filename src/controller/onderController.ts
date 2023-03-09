import { Request, Response } from "express";
import { OrderRepository } from "../repositories/orderRepositories";
export class OrderController {
  async create(req: Request, res: Response) {
    const { orderUsername, startDate, endDate, printer, state } = req.body;
    const {id_user} = req.params

    try {
      const newOrder = OrderRepository.create({
        orderUsername,
        startDate,
        endDate,
        printer,
        state
      });
      
      await OrderRepository.save(newOrder);

      return res.status(201).json(newOrder);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
