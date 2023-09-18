import { Injectable, Inject, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/Entities/category.entity';
import { CategoryDto } from 'src/dto/Category/category.dto';
import { GetCategoryDto } from 'src/dto/Category/get-Category.dto';
import { NumericType, Repository } from 'typeorm';

@Injectable()
export class CategoryService{
    constructor(@InjectRepository(CategoryEntity)
    public categoryRepository: Repository<CategoryEntity>){}

    async showAll(){
        let allCategories: CategoryEntity[] = [];
        await this.categoryRepository.find().then((r) => {allCategories = r});

        //MAP
        let result: GetCategoryDto[] = [];
        allCategories.forEach(element => {
            const dto: GetCategoryDto ={
                id: element.id,
                desc: element.desc
            };
            result.push(dto);
        });
        //console.log(result);
        return result;
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

    insertNew(nCategory: CategoryDto){
        return this.categoryRepository.insert(nCategory);
    }

    modifyCategory(id: number, mCategory: CategoryDto){
        return this.categoryRepository.update(id, mCategory)
    }
    
}