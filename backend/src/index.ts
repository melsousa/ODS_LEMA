import 'express-async-errors'
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { errorMiddleware } from './middlewares/error';
import { ApiError, BadRequestError, NotFoundError, UnauthorizedError } from "./helpers/api-erros";

AppDataSource.initialize().then( async () => {
  const app = express();
  const cors = require('cors');
  app.use(express.json());

  app.use(routes);

  app.use(errorMiddleware)

  // Habilita CORS para todas as rotas
  var corsOptions = {
    origin: 'http://localhost/5432',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  
  return app.listen(process.env.PORT);
});


