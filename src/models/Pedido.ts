import { Usuario } from './Usuario';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

@Entity('Orders')
export class Pedido{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: "text"})
    orderUsername: string

    @Column({type: 'text', nullable: true})
    startDate: Date

    @Column({type: "text", nullable: true})
    endDate: Date

    @Column({type: "text", nullable: true})
    printer: string

    @Column({type: "text"})
    state: State
    
    @ManyToOne(() => Usuario, user => user.orders)
    @JoinColumn({name: 'id_user'})
    idUser: Usuario

    constructor(id: number, orderUsername: string, startDate: Date, endDate: Date, printer: string, state: State, idUser: Usuario) {
        this.id = id
        this.orderUsername = orderUsername
        this.startDate = startDate
        this.endDate = endDate
        this.printer = printer
        this.state = state
        this.idUser = idUser
    }   
    
    public get Id() : number {
        return this.id
    }
    public get OrderUserName(): string {
        return this.orderUsername
    }
    public get StartDate(): Date {
        return this.startDate
    }
    public get EndDate(): Date {
        return this.endDate
    }
    public get Printer(): string {
        return this.printer
    }
    public get State(): State {
        return this.state
    }
    public get IdUser(): Usuario {
        return this.idUser
    }


    
}

export enum State {
    pendete,
    aprovado,
    concluido,
    reprovado,
}