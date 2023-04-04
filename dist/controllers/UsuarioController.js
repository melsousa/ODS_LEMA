"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioRepository_1 = require("./../repositories/UsuarioRepository");
const Usuario_1 = require("../entities/Usuario");
class UsuarioController {
    async create(req, res) {
        // criar usuário
        const { nome, email, senha, id_cargo } = req.body;
        //validação fullera
        let usuario = new Usuario_1.Usuario(nome, email, senha, id_cargo, null, null, null);
        try {
            const newUsuario = UsuarioRepository_1.usuarioRepository.create(usuario);
            await UsuarioRepository_1.usuarioRepository.save(newUsuario);
            return res.status(201).json(newUsuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.UsuarioController = UsuarioController;
