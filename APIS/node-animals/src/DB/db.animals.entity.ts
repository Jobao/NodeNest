import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnimalesEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name:string;

    @Column()
    id_raza:number;

    @Column()
    tamable:boolean;

}