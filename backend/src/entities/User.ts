import { Order } from "./Order";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: "text" })
  readonly name: string;

  @Column({ type: "text" })
  readonly email: string;

  @Column({ type: "text", unique: true })
  readonly password: string;

  @OneToMany(() => Order, (order) => order.idUser)
  readonly orders: Order[];

  constructor(name: string, email: string, password: string) {

    Object.assign(this, {name, email, password})
    this.validate()
    
  }
  
  
  private validate() {
    
    const validatePassword = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
    const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")

    if(this.name == "" || this.name == null) {
      throw new Error("nome é obrigatorio")
    }
    if(this.email == "" || this.email == null || !(validateEmail.test(this.email))) {
      throw new Error("crie o email apartir do email institucional")
    }
    if(this.password == "" || this.password == null || !(validatePassword.test(this.password))) {
      
      throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")
    }
    
  }

  get Id() {
    return this.id
  }
  get Name() {
    return this.name
  }
  get Email() {
    return this.email
  }
  get Password() {
    return this.password
  }
  get getOrders() {
    return this.orders
  }
}
