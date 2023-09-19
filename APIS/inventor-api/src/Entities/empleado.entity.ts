import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Empleados')
export class EmpleadoEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    nombre: string;

    //Aca se debera agregar roles
}
