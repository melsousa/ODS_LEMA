import { Order } from "./Order";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("AvailableTime")
export class AvailableTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamptz" })
  startDate: Date;

  @Column({ type: "timestamptz" })
  endDate: Date;

  @Column()
  available: boolean = false;

  @OneToMany(() => Order, (order) => order.id_time)
  times: AvailableTime[];
}
