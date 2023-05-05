"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
<<<<<<< HEAD
const Usuario_1 = require("./../entities/Usuario");
const data_source_1 = require("./../data-source");
exports.usuarioRepository = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
=======
const Usuario_entities_1 = require("../entities/Usuario.entities");
const data_source_1 = require("./../data-source");
const usuarioRepository = data_source_1.AppDataSource.getRepository(Usuario_entities_1.Usuario);
exports.usuarioRepository = usuarioRepository;
>>>>>>> origin/Melissa
