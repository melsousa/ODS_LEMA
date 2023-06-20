import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/PedidoRepository";
import { Pedido } from "../entities/Pedido.entities";
import { Estado } from "../models/Pedido";
import { usuarioRepository } from "../repositories/UsuarioRepository";
import { Usuario } from "../models/Usuario";
import { BadRequestError } from "../helpers/api-erros";
export class adminController {

    async readPedidos (req: Request, res: Response) {
        
        const {estado} = req.params
        console.log(estado)
        //retornar todos os pedidos

        const pedidos = await pedidoRepository.find({})
        //nesse caso ele vai retornar toda a tabela

        //const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado)
        //e depois filtar apenas o que o usuario vai querer
        
        console.log(pedidos)


        return res.status(200).json(pedidos)
        
        
    
        
    }

    async updatePedidos (req: Request, res: Response) {
        const {id_pedido} = req.params
        //vai pegar o id
        const estado = req.body

        //pega o estado que quer trocar
        let pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
       //pega a linha que vai ser alterada

        const pedido = await pedidoRepository.createQueryBuilder()
        .update(Pedido).set({estado: estado})
        .where({ id_pedido: id_pedido })
        .execute()

        //faz alteracao do estado
        pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
        //pedido ja alterado

        if(pedidoRetornado!=null)
        {
            pedido.generatedMaps = [Object(estado)]
            pedido.raw = pedidoRetornado
        } else {
            return res.status(404).json('pedido não encontrado')
        }

        //incluo no retorno a linha como era antes da alteracao

        return res.status(201).json(pedido)
    }
    
    async listUser (req: Request, res: Response) {
        const {id_usuario} = req.params
        console.log(id_usuario)

        if(id_usuario == null) {
            const user = await usuarioRepository.find()
            return res.status(200).json(user)

        } else {
            const user = await usuarioRepository.findOneBy({id_usuario: Number(id_usuario)})
            return res.status(200).json(user)
        }
    }

    async deleteUser (req: Request, res: Response) {
        const {id_usuario} = req.params
        console.log(id_usuario)

        const useReturn = await usuarioRepository.delete({id_usuario: Number(id_usuario)})
        
        if(useReturn.affected == 1) {
            return res.status(200).json("usuario deletado com sucesso")
        } else {
            return res.status(404).json("não foi possivel deletar, certifique se tudo está correto e tente novamente")
        }
        
    }

    async updateUser (req: Request, res: Response) {
        const {id_usuario} = req.params
        const {nome, email, senha, cargo} = req.body

        const user = await usuarioRepository.findOneBy({id_usuario: Number(id_usuario)})
        if(!user) {
            throw new BadRequestError("usuario nao existe")
        }
        
        const useReturn = await usuarioRepository.createQueryBuilder()
        .update(Usuario)
        .set({nome: nome, email: email, senha: senha, id_cargo: cargo})
        .where({ id_usuario: id_usuario })
        .execute()

        if(useReturn.affected == 1) {
            return res.status(200).json("alteração feita com sucesso")
        } else {
            return res.status(404).json("não foi possivel alterar usuário, certifique se tudo está correto e tente novamente")
        }
    }
    

}