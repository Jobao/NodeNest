import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animales')
export class AnimalesEntity{

    @PrimaryGeneratedColumn('increment')
    id : number;

    @Column('name')
    name:string;

    @Column('id_raza')
    id_raza:number;

    @Column('tamable')
    tamable:boolean;

}