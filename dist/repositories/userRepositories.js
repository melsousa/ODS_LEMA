"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const Usuario_1 = require("../models/Usuario");
const data_source_1 = require("../data-source");
exports.userRepository = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
