import { PedidoAnonimo } from './entities/PedidoAnonimo.entites';
import { Usuario } from './entities/Usuario.entities';
import { Pedido } from './entities/Pedido.entities';
import { HoraDisponivel } from './entities/HoraDisponivel.entities';
import { Cargo } from './entities/Cargo.entities';
import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { default1679541259198 } from './migrations/1679541259198-default';
import { default1683754239343 } from './migrations/1683754239343-default';
import { default1686339665727 } from './migrations/1686339665727-default';
import { default1686340715551 } from './migrations/1686340715551-default';
import { default1686353144656 } from './migrations/1686353144656-default';
import { default1686353476865 } from './migrations/1686353476865-default';
import { default1686353972801 } from './migrations/1686353972801-default';
import { default1686355895579 } from './migrations/1686355895579-default';
import { default1686421422676 } from './migrations/1686421422676-default';

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Cargo, HoraDisponivel, Pedido, Usuario, PedidoAnonimo],
  migrations: [default1679541259198, default1683754239343, default1686339665727, 
    default1686340715551, default1686353144656,default1686353476865, default1686353972801,
     default1686355895579, default1686421422676],
  subscribers: []
});

AppDataSource.initialize()
