import { usuarioRepository } from "./../repositories/UsuarioRepository";
import { Response, Request } from "express";
import {Usuario } from "../models/Usuario"
import { Usuario as User} from '../entities/Usuario.entities'
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { BadRequestError, UnauthorizedError} from "../helpers/api-erros"

export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, id_cargo } = req.body;

    let user = Usuario.create(nome, email, senha, id_cargo, null, null, null)
    
    const salt = bcrypt.genSaltSync(12)
    let senhaH =  bcrypt.hashSync(senha, salt)
    
    user.senha = senhaH
    
    
    try {
      const newUsuario = usuarioRepository.create(user);

      await usuarioRepository.save(newUsuario);

      return res.status(201).json(newUsuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async login (req: Request, res: Response) {
    const { email, senha } = req.body;

    const user = await usuarioRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("E-mail ou senha inválidos ");
    }

    const verifyPass = await bcrypt.compare(senha, user.senha);

    if (!verifyPass) {
      throw new BadRequestError("E-mail ou senha inválidos ");
    }

    //criando token para autenticar usuario
    const token = jwt.sign(
      { id: user.id_usuario },
      process.env.JWT_PASS ?? "",
      {
        expiresIn: "8h",
      }
    );

    const { senha: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }
}
