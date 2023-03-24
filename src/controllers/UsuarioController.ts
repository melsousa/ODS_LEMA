import { usuarioRepository } from "./../repositories/UsuarioRepository";
import { Response, Request } from "express";
import {Usuario } from "../models/Usuario"
import * as bcrypt from "bcrypt"
export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, id_cargo } = req.body;

    let user = Usuario.create(nome, email, senha, id_cargo, null, null, null)

    const salt = await bcrypt.genSalt(12)
    let senhaH =  bcrypt.hash(senha, salt)
    
    try {
      const newUsuario = usuarioRepository.create(user);

      await usuarioRepository.save(newUsuario);

      return res.status(201).json(newUsuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
