import dotenv from 'dotenv'
const result = dotenv.config()
import { Usuario } from "./entities/Usuario";
import { Pedido } from "./entities/Pedido";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cargo } from "./entities/Cargo";
import { HoraDisponivel } from "./entities/HoraDisponivel";

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


AppDataSource.initialize().then(()=>{
  console.log("data source has been initialized!")
})
.catch((err)=> { //em caso de erro em achar o .env ou se acontecer algum problema na conexao com o bd
  
  console.error(err)
  console.log(result)
})
