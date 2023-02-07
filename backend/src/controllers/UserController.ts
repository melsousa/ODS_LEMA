import { userRepository } from "./../repositories/UserRepository";
import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response) {
    // criando usuário
    const { name, email, password } = req.body;

    if (!name) {
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
}
