"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargoRepository = void 0;
<<<<<<< HEAD
const Cargo_1 = require("./../entities/Cargo");
const data_source_1 = require("./../data-source");
exports.cargoRepository = data_source_1.AppDataSource.getRepository(Cargo_1.Cargo);
=======
const Cargo_entities_1 = require("../entities/Cargo.entities");
const data_source_1 = require("./../data-source");
exports.cargoRepository = data_source_1.AppDataSource.getRepository(Cargo_entities_1.Cargo);
>>>>>>> origin/Melissa
