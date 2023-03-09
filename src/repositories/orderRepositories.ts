import { Order } from "../models/Pedido";
import { AppDataSource } from "../data-source";

export const OrderRepository = AppDataSource.getRepository(Order);
