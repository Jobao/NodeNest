import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('products')
export class ProductsEntity{
    @PrimaryGeneratedColumn('increment')
    id?: number;
    
    @Column('varchar')
    desc: string;

    @Column('integer')
    cantidad: number;
    
    //el atributo eager es para que me traiga los datos de la FK
    @JoinColumn()
    @ManyToOne(type => CategoryEntity, (idcategory) => idcategory.id, {nullable: false, eager: true,})
    id_category: CategoryEntity;
}