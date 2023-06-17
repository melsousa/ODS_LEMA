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

export enum Prioridade {
  baixa,
  media,
  alta,
}

export enum Estado {
  pendente,
  aprovado,
  concluido,
  reprovado,
}

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column({ type: "text", nullable: true })
  material: string;

  @Column({ type: "text" , enum: Prioridade})
  prioridade: Prioridade;

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", enum: Estado})
  estado: Estado;

  @Column({ type: "longblob", nullable: true })
  arquivo: Buffer | null;

  @Column({ type: "text", nullable: true })
  medida: string;

  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({ name: "id_horaDisponivel" })
  id_horaDisponivel: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.autorPedido)
  @JoinColumn({ name: "id_autorPedido" })
  id_autorPedido: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador" })
  id_autorAutorizador: number;
}

