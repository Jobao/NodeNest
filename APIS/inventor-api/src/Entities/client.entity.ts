import { AuthEntity } from "src/auth/auth.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => AuthEntity)
    @JoinColumn()
    authId: AuthEntity;
}
