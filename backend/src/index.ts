import 'express-async-errors'
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

import { errorMiddleware } from './middlewares/error';
import { ApiError, BadRequestError, NotFoundError, UnauthorizedError } from "./helpers/api-erros";

AppDataSource.initialize().then( async () => {
  const app = express();

  app.use(express.json());

  app.use(routes);


  return app.listen(process.env.PORT, ()=> {
    console.log(`localhost:${process.env.PORT}`)
  });
});

// const path = `${__dirname}/arquivo/item_2.STL`
// const arquivo1 = fs.readFileSync(path, 'ascii')
// console.log(arquivo1)

// let pedido = new Pedido("PLA", Prioridade.baixa, "impressora1", arquivo1)

// console.log(pedido)