import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import User from "./User"

@Entity('address')
class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    pais: string;

    @Column()
    rua:string;

    @Column()
    municipio:string;

    @Column()
    bairro:string;

    @Column('uuid')
    userId:string;

    @ManyToOne(()=>User, (user:User) => user.address)
    user:User;

}

export default Address;