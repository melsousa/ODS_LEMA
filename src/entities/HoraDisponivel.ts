import { Pedido } from './Pedido';


import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("horaDisponivel")
export class HoraDisponivel {
  @PrimaryGeneratedColumn()
  id_hora: number;

  @Column({ type: "text" })
  dataInicio: Date;

  @Column({ type: "text" })
  dataFim: Date;

  @Column()
  disponivel: boolean = false;

  @OneToMany(() => Pedido, (pedido) => pedido.id_horaDisponivel)
  horas: HoraDisponivel[] | null;

  constructor(id_hora: number, dataInicio: Date, dataFim: Date, disponivel: boolean, horas: HoraDisponivel[] | null) {
    this.id_hora = id_hora
    this.dataInicio = dataInicio
    this.dataFim = dataFim
    this.disponivel = disponivel
    this.horas = horas
  }
}
