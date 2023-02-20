import { Office } from "./Office";
import { Order } from "./Order";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

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

  @ManyToOne(() => Office, (office) => office.id_user)
  @JoinColumn({ name: "id_office" })
  id_office: Office;

  @OneToMany(() => Order, (order) => order.author_id)
  ordersAuthor: Order[];

  @OneToMany(() => Order, (order) => order.requester_id)
  ordersRequester: Order[];
}
