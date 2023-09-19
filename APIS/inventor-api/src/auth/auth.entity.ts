import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AuthInfoEntity } from "./authinfo.entity";

@Entity('Usuarios')
export class AuthEntity{
    @PrimaryColumn('int')
    id: number;

    @OneToOne(()=>AuthInfoEntity)
    @Column('varchar')
    usr: string
}