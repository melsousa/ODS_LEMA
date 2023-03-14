import { usuarioRepository } from "../repositories/UsuarioRepository";
import { Response, Request } from "express";
import { Usuario } from "../entities/Usuario";

export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, id_cargo } = req.body;

    //validação fullera
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }

    try {
      const newUsuario = usuarioRepository.create(new Usuario(nome, email, senha, id_cargo, null, null, null));

      await usuarioRepository.save(newUsuario);

      return res.status(201).json(newUsuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}