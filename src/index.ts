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
