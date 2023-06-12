import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import { UnauthorizedError } from "../helpers/api-erros";
import { usuarioRepository } from "../repositories/UsuarioRepository";

type JwtPayLoad ={
    id: String
}

export const autenticaoToken = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;

    if (!authorization) {
        throw new UnauthorizedError("Não autorizado");
    }
  
      const token = authorization.split(" ")[1];
  
      // verificando se o token existe
      const { id_usuario } = jwt.verify(
        token,
        process.env.JWT_PASS ?? ""
      ) as jwt.JwtPayload;
  
      const user = await usuarioRepository.findOneBy({ id_usuario });


      if (!user) {
        throw new UnauthorizedError("Não autorizado");
      }
      //const { senha: _, ...loggedUser } = user;
      
      next()
      

  
}

export const autenticacaoAdmin =async (req: Request, res: Response, next: NextFunction) => {
  
  const { authorization } = req.headers;

  if (!authorization) {
      throw new UnauthorizedError("Não autorizado");
  }
  
  const token = authorization.split(" ")[1];

  // verificando se o token existe
  const { id_usuario } = jwt.verify(
    token,
    process.env.JWT_PASS ?? ""
  ) as jwt.JwtPayload;

  const user = await usuarioRepository.findOne({where: { id_usuario, }, relations: ['id_cargo']});
  
  
  console.log(user)
  if (user?.id_cargo.id_cargo != 1) {
    throw new UnauthorizedError("Não autorizado");
  }  
  next()
 
}