import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('categories')
export class CategoryEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    desc: string;
}