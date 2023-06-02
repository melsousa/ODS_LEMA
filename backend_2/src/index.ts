import 'express-async-errors'
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { errorMiddleware } from './middlewares/error';
import cors from "cors";
import { ApiError, BadRequestError, NotFoundError, UnauthorizedError } from "./helpers/api-erros";

AppDataSource.initialize().then( async () => {
  const app = express();
  app.use(express.json());
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
  

  app.use(routes);

  app.use(errorMiddleware)

  return app.listen(process.env.PORT);
});


