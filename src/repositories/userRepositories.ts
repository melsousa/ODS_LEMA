import { User } from "../models/Usuario";
import { AppDataSource } from "../data-source";

export const userRepository = AppDataSource.getRepository(User);