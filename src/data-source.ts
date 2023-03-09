import "dotenv/config";
import { User } from "./models/Usuario";
import { Order } from "./models/Pedido";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Order],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  "synchronize": true,
  "logging": false
});


AppDataSource.initialize()
