import { PedidoAnonimo } from './entities/PedidoAnonimo';
import { Usuario } from './entities/Usuario';
import { Pedido } from './entities/Pedido';
import { HoraDisponivel } from './entities/HoraDisponivel';
import { Cargo } from './entities/Cargo';
import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { default1679541259198 } from './migrations/1679541259198-default';


const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Cargo, HoraDisponivel, Pedido, Usuario, PedidoAnonimo],
  migrations: [default1679541259198],
  subscribers: []
});

AppDataSource.initialize()
