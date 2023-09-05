import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/Entities/category.entity';
import { NumericType, Repository } from 'typeorm';

@Injectable()
export class CategoryService{
    constructor(@InjectRepository(CategoryEntity)
    public categoryRepository: Repository<CategoryEntity>){}

    showAll(){
        return this.categoryRepository.find();
    }

    getById(id: number){
        return this.categoryRepository.findOneBy({id});
    }

    insertNew(nCategory: CategoryEntity){
        return this.categoryRepository.insert(nCategory);
    }
    
}