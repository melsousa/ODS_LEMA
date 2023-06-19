import { usuarioRepository } from "./../repositories/UsuarioRepository";
import { cargoRepository } from "./../repositories/CargoRepository";
import { Response, Request } from "express";
import { Usuario } from "../models/Usuario";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { Cargo } from "../entities/Cargo.entities";

type JwtPayload = {
  id_usuario: number;
};

export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, cargo } = req.body;
    
    const userExists = await usuarioRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("Email já cadastrado ");
    }
    
    let user = Usuario.create(nome, email, senha, cargo);

    const newUsuario = usuarioRepository.create(user);
    
    const { senha: _, ...userSemSenha } = newUsuario; 

    await usuarioRepository.save(newUsuario);


    return res.status(201).json(userSemSenha);
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const user = await usuarioRepository.findOneBy({ email });

    //console.log(email, senha, user)
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

    console.log("token", token);

    const { senha: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }

  //usuario vai conseguir obter seus dados apartir do token
  async getProfile(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    // verificando se o token existe
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    const user = await usuarioRepository.findOne({where: { id_usuario: id }, relations: ['id_cargo']});
    
    if (user == null) {
      throw new UnauthorizedError("Não autorizado");
    }

    const { senha: _, ...loggedUser } = user;
    
    return res.json(loggedUser);
  }

  async updateUser(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { nome, email, senha } = req.body;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };

    const { id } = decodedToken;

    const user = await usuarioRepository.findOne({
      where: { id_usuario: id },
    });

    if (!user) {
      throw new UnauthorizedError("Não autorizado");
    }

    // Atualizar as informações do usuário

    user.nome = nome || user.nome;
    user.email = email || user.email;
    user.senha = (await bcrypt.hash(senha, 10)) || user.senha;

    await usuarioRepository.save(user);

    const { senha: _, ...updatedUser } = user;
    return res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };

    const { id } = decodedToken;

    const user = await usuarioRepository.findOne({
      where: { id_usuario: id },
    });

    if (!user) {
      throw new BadRequestError("Não autorizado");
    }

    await usuarioRepository.delete(user.id_usuario);

    return res.json({ message: "Usuário excluído com sucesso" });
  }
}
 