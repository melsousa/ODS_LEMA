import { HoraDisponivel } from './HoraDisponivel';
import { Usuario } from './Usuario';

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
  estado: Estado;
  
  @Column({type: 'text', nullable:true})
  arquivo: Buffer
  
  @Column({type:"text", nullable:true})
  medida: string
  
  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({name: "id_horaDisponivel"})
  id_horaDisponivel: HoraDisponivel

  @ManyToOne(() => Usuario, (usuario) => usuario.AutorPedido)
  @JoinColumn({name: "id_autorPedido"})
  id_autorPedido: Usuario
  
  @ManyToOne(() => Usuario, (usuario) => usuario.AutorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador"})
  id_autorAutorizador: Usuario;
  
  
  constructor(id_pedido: number, material: string, prioridade: Prioridade, maquina: string,
    estado: Estado, arquivo: Buffer, medida: string, id_horaDisponivel: HoraDisponivel, 
    id_autorPedido: Usuario, id_autorAutorizador: Usuario) {

this.id_pedido = id_pedido
this.material = material
this.prioridade = prioridade
this.maquina = maquina
this.estado = estado
this.arquivo = arquivo
this.medida = medida
this.id_horaDisponivel = id_horaDisponivel
this.id_autorPedido = id_autorPedido
this.id_autorAutorizador = id_autorAutorizador
}   

public get Id() : number {
return this.id_pedido
}
public get Material(): string {
return this.material
}
public get Prioridade(): Prioridade {
return this.prioridade
}
public get Maquina(): string {
return this.maquina
}
public get Estado(): Estado {
return this.estado
}
public get Arquivo(): Buffer {
return this.arquivo
}
public get Medida(): string {
return this.medida
}

public get Id_horaDisponivel() : HoraDisponivel {
return this.id_horaDisponivel
}

public get Id_autorPedido() : Usuario {
return this.id_autorPedido
}

public get value() : Usuario {
return this.id_autorAutorizador
}

}

export enum Estado {
pendete,
aprovado,
concluido,
reprovado,
}

export enum Prioridade {
baixa,
media,
alta

}

