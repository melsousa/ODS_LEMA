import { UserController } from "./controller/userController";
import { Router } from "express";


const routes = Router();

routes.post("/user", new UserController().create);
routes.post("/user/:id_user/create", new UserController().createOrder)

routes.get("/home", )

export default routes;
