import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from "typeorm";
import bcrypt from "bcryptjs"
import Address from "./Address"

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    nome:string;

    @Column()
    sobrenome:string;

    @Column()
    password:string;

    @Column('date')
    created_at:Date;

    @Column('date')
    updated_at:Date;

    @OneToMany(() => Address, (address:Address) => address.user)
    address:Address[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

}

export default User;