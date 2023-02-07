import { Order } from "./Order";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text", unique: true })
  password: string;

  @OneToMany(() => Order, (order) => order.idUser)
  orders: Order[];
}
