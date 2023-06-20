import { error } from "console";
import { Estado, Pedido } from "../models/Pedido";
import { pedidoRepository } from "./../repositories/PedidoRepository";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import { usuarioRepository } from "../repositories/UsuarioRepository";
import { In } from "typeorm";

export class PedidoController {
  async createPedido(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // Verificando se o token existe e obtendo o ID do usuário
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    // Dados do pedido
    const {
      material,
      prioridade,
      maquina,
      arquivo,
      medida,
      id_horaDisponivel,
    } = req.body;

    const { id_autorPedido } = req.params;
    
    
    const pedido = new Pedido(material,
      prioridade, 
      maquina, 
      arquivo, 
      medida, 
      id_horaDisponivel, 
      Number(id_autorPedido), 
      null)



    const novoPedido = pedidoRepository.create(pedido);

    await pedidoRepository.save(novoPedido);

    return res.status(201).json(novoPedido);
  }

  async getPedidosByUsuario(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // Verificando se o token existe e obtendo o ID do usuário
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;
    console.log(id)

    // Obtendo os pedidos vinculados ao usuário logado
    const pedidos = await pedidoRepository
    .createQueryBuilder("pedido")
    .where("pedido.id_autorPedido = :id_autorPedido", { id_autorPedido: id })
    .getMany();
  


    return res.status(200).json(pedidos);
  }

  async updatePedido(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { id_pedido } = req.params;
    const { material, maquina, medida } = req.body;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // verificando se o token existe
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    const pedido = await pedidoRepository.findOne({
      where: { id_pedido: Number(id_pedido), id_autorPedido: id },
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    if (pedido.estado.toString().toLowerCase() !== Estado.pendente) {
      throw new Error(
        "O pedido não pode ser excluído porque não está no estado 'pendente'"
      );
    }

    pedido.material = material || pedido.material;
    pedido.maquina = maquina || pedido.maquina;
    pedido.medida = medida || pedido.medida;

    await pedidoRepository.save(pedido);

    return res.status(200).json(pedido);
  }

  async deletePedido(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { id_pedido } = req.params;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // Verificando se o token existe e obtendo o ID do usuário
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    // Verificando se o pedido existe e se o estado é "pendente"
    const pedido = await pedidoRepository.findOne({
      where: { id_pedido: Number(id_pedido), id_autorPedido: id },
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    if (pedido.estado.toString().toLowerCase() !== Estado.pendente) {
      throw new Error(
        "O pedido não pode ser atualizado porque não está no estado 'pendente'"
      );
    }

    // Excluindo o pedido
    await pedidoRepository.delete({id_pedido: Number(id_pedido), id_autorPedido: id});

    return res.status(202).json("pedido deletado");
  }

  async getPedidosByEstado(req: Request, res: Response) {
    const { estado } = req.params;

    try {
      // Verifique se o estado fornecido é válido
      const estadoEnum = Object.values(Estado).find(
        (enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase()
      );

      if (!estadoEnum) {
        throw new Error("Estado inválido");
      }

      const pedidos = await pedidoRepository.find({
        where: { estado: In([estadoEnum]) },
      });

      return res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //busca todos os pedidos do usuario que ta logado
  async readPedido(req: Request, res: Response) {
    const {authorization} = req.headers
    if (!authorization) {
      throw new Error("Não autorizado");
    }

    const token = authorization.split(" ")[1]
    
    
    const { id_usuario } = jwt.verify(
      token,
      process.env.JWT_PASS ?? ""
    ) as jwt.JwtPayload;

    const pedidos = await pedidoRepository.find({
      where: {id_autorPedido: id_usuario}
    })

    return res.status(200).json(pedidos)

  }


}