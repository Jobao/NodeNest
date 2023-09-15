import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class ClientEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column({type: "varchar", nullable: true})
    address: string;

    @Column({type: "varchar", nullable: true})
    idFiscal: string;

    @Column({type: "varchar", nullable: true})
    email: string;


}
