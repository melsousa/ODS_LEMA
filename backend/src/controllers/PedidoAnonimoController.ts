import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pedidoAnonimoRepository } from "../repositories/PedidoAnonimoRepository";
import { PedidoAnonimo, Estado } from "../models/PedidoAnonimo";
import fs from "fs";


export class PedidoAnonimoController {
  async createPedidoAnonimo(req: Request, res: Response) {
    try {
      // criar pedido anônimo
      const {
        material,
        maquina,
        cor,
        descricao,
        comentario,
        id_horaDisponivel,
      } = req.body;
  
      let id_autorAutorizadorAnonimo = 1;
      let estado: Estado = Estado.pendente;
      let arquivo: Buffer | undefined;
      let codigo = bcrypt.hashSync(Date.now().toString(), 10); // gerando um hash a partir do timestamp atual
  
      if (req.file) {
        arquivo = fs.readFileSync(req.file.path);
      }
      
      const pedidoAnonimo = new PedidoAnonimo (
          material,
          maquina,
          estado,
          arquivo || Buffer.alloc(0),
          cor,
          descricao,
          comentario,
          codigo,
          id_horaDisponivel,
          Number(id_autorAutorizadorAnonimo),
      );
  
      const novoPedidoAnonimo = pedidoAnonimoRepository.create(pedidoAnonimo);
      await pedidoAnonimoRepository.save(novoPedidoAnonimo);
  
      return res.status(201).json(novoPedidoAnonimo);
    } catch (error) {
      // Trate o erro aqui, você pode enviar uma resposta de erro personalizada ou executar outras ações necessárias
      
      return res.status(500).json({ error: "Ocorreu um erro ao criar o pedido anônimo" });
    }
  }
  
  

  async listPedidosAnonimos(req: Request, res: Response) {
    try {
      const pedidos = await pedidoAnonimoRepository.find();

      return res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // async listPedidosAnonimosT(req: Request, res: Response) {
  //   try {
  //     const pedidos = await pedidoAnonimoRepository
  //       .createQueryBuilder("pedidoAnonimo")
  //       .leftJoinAndSelect("pedidoAnonimo.id_horaDisponivel", "horaDisponivel")
  //       .leftJoinAndSelect("pedidoAnonimo.id_autorAutorizadorAnonimo", "autorAutorizadorAnonimo")
  //       .leftJoinAndSelect("autorAutorizadorAnonimo.id_cargo", "cargo")
  //       .getMany();
  
  //     return res.status(200).json(pedidos);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({ message: "Internal Server Error" });
  //   }
  // }
  

  async getPedidoByCodigo(req: Request, res: Response) {
    const { codigo } = req.params;

    try {
      const pedido = await pedidoAnonimoRepository.findOne({
        where: { codigo: codigo },
      });

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      return res.status(200).json(pedido);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updatePedido(req: Request, res: Response) {
    const { codigo } = req.params;
    const { material, maquina, medida } = req.body;

    const pedido = await pedidoAnonimoRepository.findOne({
      where: { codigo: codigo },
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
    // pedido.medida = medida || pedido.medida;

    await pedidoAnonimoRepository.save(pedido);

    return res.status(200).json(pedido);
  }

  async deletePedido(req: Request, res: Response) {
    
    const { codigo } = req.params;
  
    
    // Verificando se o pedido existe e se o estado é "pendente"
    const pedido = await pedidoAnonimoRepository.findOne({
      where: { codigo: codigo},
    });
  
    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }
  
  
    // Excluindo o pedido
    await pedidoAnonimoRepository.delete({ codigo: codigo });
  
    return res.status(202).json("pedido deletado");
  }
  
}
