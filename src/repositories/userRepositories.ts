import { Usuario } from "../models/Usuario";
import { AppDataSource } from "../data-source";

export const userRepository = AppDataSource.getRepository(Usuario);