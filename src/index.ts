import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./router";

import * as dotenv from 'dotenv'
const result = dotenv.config()

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);
  console.log(`executando em localhost:${process.env.PORT}`)
  console.log(`resultado variavel de ambiente ${result.error}`)
  return app.listen(process.env.PORT);
});
// import { Cargo } from "./models/Cargo";
// import { Pedido } from "./models/Pedido";
// import { Usuario } from "./models/Usuario";


// let usuario = new Usuario("gabriel", 
//               "gabriel.silva.pimentel08@aluno.ifce.edu.br",
//               "G1a2b3r4i5e6l7,.",
//               new Cargo(1, "bolsista", null),
//               null, null)

// console.log(usuario)
