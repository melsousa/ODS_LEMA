import { HoraDisponivel } from "./HoraDisponivel.entities";
import { Usuario } from "./Usuario.entities";
import { DeepPartial } from "typeorm";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum Estado {
  pendente,
  aprovado,
  concluido,
  reprovado,
}

@Entity("pedidosAnonimo")
export class PedidoAnonimo {
  @PrimaryGeneratedColumn()
  id_pedidoAnonimo: number;

  @Column({ type: "text", nullable: true })
  material: string;

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", enum: Estado })
  estado: string;

  @Column({ type: "longblob", nullable: true }) // ainda não foi rodado no banco
  arquivo: DeepPartial<Buffer> | undefined;

  @Column({ type: "text", nullable: true })
  medida: string;

  @Column({ type: "text", nullable: true })
  codigo: string;

  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({ name: "id_horaDisponivel" })
  id_horaDisponivel: HoraDisponivel;

  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizadorAnonimo)
  @JoinColumn({ name: "id_autorAutorizadorAnonimo" })
  id_autorAutorizadorAnonimo: Usuario;
}
