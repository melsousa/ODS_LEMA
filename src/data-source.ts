import "dotenv/config";
import { Usuario } from "./models/Usuario";
import { Pedido } from "./models/Pedido";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cargo } from "./models/Cargo";
import { HoraDisponivel } from "./models/horaDisponivel";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Usuario, Pedido, Cargo, HoraDisponivel],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  "synchronize": true,
  "logging": false
});


AppDataSource.initialize()
