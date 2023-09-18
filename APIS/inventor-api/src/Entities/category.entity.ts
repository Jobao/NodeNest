import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    desc: string;
}