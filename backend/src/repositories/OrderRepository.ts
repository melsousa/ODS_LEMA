import { Order } from "../entities/Order";
import { AppDataSource } from "../data-source";

export const OrderRepository = AppDataSource.getRepository(Order);
