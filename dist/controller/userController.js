"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const userRepositories_1 = require("./../repositories/userRepositories");
const Usuario_1 = require("../models/Usuario");
class UsuarioController {
    async create(req, res) {
        // criar usuário
        const { nome, email, senha, id_cargo } = req.body;
        //validação fullera
        if (!nome) {
            return res.status(400).json({ message: "O nome é obrigatório" });
        }
        try {
            const newUsuario = userRepositories_1.usuarioRepository.create(new Usuario_1.Usuario(nome, email, senha, id_cargo));
            await userRepositories_1.usuarioRepository.save(newUsuario);
            return res.status(201).json(newUsuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.UsuarioController = UsuarioController;
