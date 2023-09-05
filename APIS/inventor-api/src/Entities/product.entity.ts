import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { types } from 'util';
import { type } from 'os';

@Entity('products')
export class ProductsEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    desc: string;

    @Column('integer')
    cantidad: number;
    
    //el atributo eager es para que me traiga los datos de la FK
    @JoinColumn()
    @ManyToOne(type => CategoryEntity, (idcategory) => idcategory.id, {nullable: false, eager: true,})
    id_category: CategoryEntity;
}