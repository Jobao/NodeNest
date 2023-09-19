import { AuthEntity } from "src/auth/auth.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Empleados')
export class EmpleadoEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    nombre: string;

   
    @OneToOne(() => AuthEntity)
    @JoinColumn()
    authId: AuthEntity;

     //Aca se debera agregar roles
}
