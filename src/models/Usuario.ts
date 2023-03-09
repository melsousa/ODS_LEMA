import { Pedido } from "./Pedido";
import { Cargo } from "./Cargo"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";



@Entity({database: "User"})
export class Usuario {
  @PrimaryGeneratedColumn()
  readonly id_usuario: number;

  @Column({ type: "text" })
  readonly name: string;

  @Column({ type: "text" })
  readonly email: string;

  @Column({ type: "text", unique: true })
  readonly senha: string;

  @ManyToOne(() => Cargo, (cargo) => cargo.id_usuario)
  @JoinColumn({ name: "id_cargo" })
  readonly id_cargo: Cargo;

  @OneToMany(() => Pedido, (order) => order.id_autorPedido)
  readonly orders: Pedido[] | null;

  @OneToMany(() => Pedido, (pedido) => pedido.id_autorAutorizador)
  readonly autorAutorizador: Pedido[];


  
  constructor(id_usuario: number, name: string, email: string, senha: string, id_cargo: Cargo, orders: Pedido[] | null, autorAutorizador: Pedido[]) {

    this.id_usuario = id_usuario
    this.name = name
    this.email = email
    this.senha = senha
    this.id_cargo = id_cargo
    this.orders = orders
    this.autorAutorizador = autorAutorizador
    this.validate()
    
  }
  
  
  private validate() {
    
    const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
    const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")

    if(this.name == "" || this.name == null) {
      throw new Error("nome é obrigatorio")
    }
    if(this.email == "" || this.email == null || !(validateEmail.test(this.email))) {
      throw new Error("crie o email apartir do email institucional")
    }
    if(this.senha == "" || this.senha == null || !(validatesenha.test(this.senha))) {
      throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")
    }
    
  }

  get Id() {
    return this.id_usuario
  }
  get Name() {
    return this.name
  }
  get Email() {
    return this.email
  }
  get Senha() {
    return this.senha
  }
  get getOrders() {
    return this.orders
  }
}
