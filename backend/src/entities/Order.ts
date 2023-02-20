import { AvailableTime } from './AvailableTime';
import { User } from "./User";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  material: string;
  
  @Column({type: "text"})
  priority: string

  @Column({ type: "text", nullable: true })
  machine: string;

  @Column({ type: "text" })
  state: string;
  
  @Column({type: 'blob', nullable:true})
  file: Buffer
  
  @Column({type:"text"})
  measure: string
  
  @ManyToOne(() => AvailableTime, (availableTime) => availableTime.times)
  @JoinColumn({name: "availabletime"})
  id_time: AvailableTime

  @ManyToOne(() => User, (user) => user.ordersAuthor)
  @JoinColumn({name: "author_id"})
  author_id: User
  
  @ManyToOne(() => User, (user) => user.ordersRequester)
  @JoinColumn({ name: "requester_id" })
  requester_id: User;
}
