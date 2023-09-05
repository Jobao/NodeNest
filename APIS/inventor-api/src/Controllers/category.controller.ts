import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { CategoryEntity } from "src/Entities/category.entity";
import { CategoryService } from "src/Service/category.service";

@Controller('API/Categories')
export class CategoriesController{
    constructor(private categoriesService: CategoryService
    ){}

    @Get()
    showAll(){
        return this.categoriesService.showAll();
    }

    @Put()
    insertNewCategory(@Body() nCategory: CategoryEntity){
        return this.categoriesService.insertNew(nCategory);
    }
}