import { OrderController } from './controllers/OrderController';
import { UserController } from "./controllers/UserController";
import { Router } from "express";

const routes = Router();

routes.post("/user", new UserController().create);
routes.post("order", new OrderController().create)
export default routes;
