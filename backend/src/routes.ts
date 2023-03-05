import { HorarioController } from './controllers/HorarioController';
import { CargoController } from './controllers/CargoController';
import { PedidoController } from './controllers/PedidoController';
import { UsuarioController } from "./controllers/UsuarioController";
import { Router } from "express";

const routes = Router();

routes.post("/usuario", new UsuarioController().create);
routes.post("/cargo", new CargoController().createCargo);
routes.post("/horario", new HorarioController().createHorario);
// routes.post("/user/:id_user/create", new PedidoController().createPedido)
export default routes;
