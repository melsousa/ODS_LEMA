import { HoraDisponivel } from './HoraDisponivel.entities';
import { Usuario } from './Usuario.entities';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column({ type: "text", nullable:true })
  material: string;
  
  @Column({type: "text"})
  prioridade: Prioridade

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", nullable: true })
  estado: string;
  
  @Column({type: 'blob', nullable:true}) //tipo para arquivo em mysql
  arquivo: Buffer
  
  @Column({type:"text", nullable:true})
  medida: string
  
  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({name: "id_horaDisponivel"})
  id_horaDisponivel: number

  @ManyToOne(() => Usuario, (usuario) => usuario.autorPedido)
  @JoinColumn({name: "id_autorPedido"})
  id_autorPedido: number
  
  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador"})
  id_autorAutorizador: number;
  
}


export enum Prioridade {
  baixa,
  media,
  alta
}