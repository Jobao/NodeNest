import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { DB_RazaEntity } from './db.raza.entity';

@Entity('animales_entity')
export class DB_AnimalesEntity{

    @PrimaryGeneratedColumn('increment')
    id : number;

    @Column()
    name:string;

    //@Column()
    @JoinColumn()
    @ManyToOne(type => DB_RazaEntity, (id_raza) => id_raza.id)
    id_raza:DB_RazaEntity;

    @Column()
    tamable:boolean;

    

}