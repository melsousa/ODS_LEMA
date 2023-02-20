import { User } from "./User";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity("office")
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  office: string = "Membro da Comunidade";

  @OneToMany(() => User, (user) => user.id_office)
  id_user: Office[];
}
