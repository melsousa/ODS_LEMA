import { OrderRepository } from '../repositories/OrderRepository';
import { userRepository } from "../repositories/UserRepository";
import { Request, Response } from "express";
import { User } from '../entities/User';

export class UserController {
  async create(req: Request, res: Response) {
    // criando usuário
    const { name, email, password } = req.body;
    let newUser = new User(name, email, password)
    
    if (!newUser.Name) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }

    try {
      const newUser = userRepository.create({
        name,
        email,
        password,
      });
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

    try {
      const idUser = await userRepository.findOne({where: {id: Number(id_user)} });

      if (!idUser) {
        return res.status(404).json({ message: "Não existe esse usuário" });
      }

      const newOrder = OrderRepository.create({
        orderUsername,
        startDate,
        endDate,
        printer,
        state,
        idUser
      })

      await OrderRepository.save(newOrder)

      return res.status(201).json(newOrder)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
