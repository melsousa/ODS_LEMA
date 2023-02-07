import { User } from './User';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

@Entity('orders')
export class Order{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: "text"})
    orderUsername: string

    @Column({type: 'timestamptz', nullable: true})
    startDate: Date

    @Column({type: "timestamptz", nullable: true})
    endDate: Date

    @Column({type: "text", nullable: true})
    printer: string

    @Column({type: "text"})
    state:string
    
    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({name: 'id_user'})
    idUser: User
    
}