import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CategoryService } from "src/Service/category.service";
import { CategoryDto } from "src/dto/Category/category.dto";

@Controller('API/Categories')
export class CategoriesController{
    constructor(private categoriesService: CategoryService
    ){}

    @Get()
    async showAll(){
        return await this.categoriesService.showAll();
    }

    @Post()
    insertNewCategory(@Body() nCategory: CategoryDto){
        return this.categoriesService.insertNew(nCategory);
    }

    @Patch(':id')
    modifyCategory(@Param('id', ParseIntPipe) id: number, @Body()mCategory: CategoryDto){
        return this.categoriesService.modifyCategory(id, mCategory);
    }
}