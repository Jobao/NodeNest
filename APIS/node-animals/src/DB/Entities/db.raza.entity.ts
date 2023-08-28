import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DB_AnimalesEntity } from './db.animals.entity';

@Entity('raza')
export class DB_RazaEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descripcion: string;
}