import { Column, PrimaryColumn, Entity, Unique } from "typeorm";

@Entity('authinfo')
export class AuthInfoEntity{
    @PrimaryColumn('varchar')
    usr: string;

    @Column()
    pass: string;
}