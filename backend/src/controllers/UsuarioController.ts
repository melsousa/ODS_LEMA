import { usuarioRepository } from "./../repositories/UsuarioRepository";
import { Response, Request } from "express";
import { Usuario } from "../models/Usuario";
import { Usuario as User } from "../entities/Usuario.entities";
import * as bcrypt from "bcrypt";
export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, id_cargo } = req.body;

    
    let user = Usuario.create(nome, email, senha, id_cargo, null, null, null);

    const salt = bcrypt.genSaltSync(12);
    let senhaH = bcrypt.hashSync(senha, salt);

    user.senha = senhaH;

    const newUsuario = usuarioRepository.create(user);

    await usuarioRepository.save(newUsuario);

    return res.status(201).json(newUsuario);
  }
}
