import { UsuarioController } from "./controller/UsuarioController";
import { Router } from "express";
import { CargoController } from "./controller/CargoController";
import { HorarioController } from "./controller/HorarioController";
import { PedidoController } from "./controller/PedidoController";


const routes = Router();
routes.post("/usuario", new UsuarioController().create);
routes.post("/cargo", new CargoController().createCargo);
routes.post("/horario", new HorarioController().createHorario);
routes.post("/pedido", new PedidoController().createPedido);




routes.get("/home", )

export default routes;
