import { Injectable, Inject, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
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
    /**
     * IF the category does not exist it throws an exception (404)
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<CategoryEntity>{
        try{
            return await this.categoryRepository.findOneBy({id}).then((result) => {
                if(result != null){
                    return result;
                }
                throw new HttpException("non-existent category", HttpStatus.NOT_FOUND);
            });
        }
        catch(err){
            throw err;
        }
        
    }

    insertNew(nCategory: CategoryEntity){
        return this.categoryRepository.insert(nCategory);
    }
    
}