import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pedidoAnonimoRepository } from "../repositories/PedidoAnonimoRepository";
import { Estado } from "../models/PedidoAnonimo";

export class PedidoAnonimoController {
    async createPedidoAnonimo(req: Request, res: Response) {
        // criar pedido anônimo
        const {
            material,
            prioridade,
            maquina,
            estado,
            arquivo,
            medida,
            codigo,
            id_horaDisponivel,
            id_autorAutorizadorAnonimo,
        } = req.body;

    try {
      const novoPedido = pedidoAnonimoRepository.create({
        material,
        maquina,
        estado,
        arquivo,
        medida,
        codigo: bcrypt.hashSync(Date.now().toString(), 10), // gerando um hash a partir do timestamp atual
        id_horaDisponivel,
        id_autorAutorizadorAnonimo,
      });

      await pedidoAnonimoRepository.save(novoPedido);

      return res.status(201).json(novoPedido);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
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

  async listPedidosAnonimosT(req: Request, res: Response) {
    try {
      const pedidos = await pedidoAnonimoRepository
        .createQueryBuilder("pedidoAnonimo")
        .leftJoinAndSelect("pedidoAnonimo.id_horaDisponivel", "horaDisponivel")
        .leftJoinAndSelect("pedidoAnonimo.id_autorAutorizadorAnonimo", "autorAutorizadorAnonimo")
        .leftJoinAndSelect("autorAutorizadorAnonimo.id_cargo", "cargo")
        .getMany();
  
      return res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  

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
    pedido.medida = medida || pedido.medida;

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
  
    if (pedido.estado.toString().toLowerCase() !== Estado.pendente) { 
      throw new Error("O pedido não pode ser atualizado porque não está no estado 'pendente'");
    }
  
    // Excluindo o pedido
    await pedidoAnonimoRepository.delete({ codigo: codigo });
  
    return res.status(202).json("pedido deletado");
  }
  
}
