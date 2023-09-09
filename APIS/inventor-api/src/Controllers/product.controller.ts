import { Controller, Get, Param, Query, Put, Post, Body, Patch, Delete, BadRequestException, HttpCode, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { ProductService } from "src/Service/product.service";
import { ParseIntPipe } from '@nestjs/common';
import { ProductsEntity } from "src/Entities/product.entity";
import { CategoryService } from "src/Service/category.service";


@Controller('API/Products')
export class ProductsController{
    constructor(private productService: ProductService, private categoryService: CategoryService){}

    @Get()
    findAll(){
        return this.productService.showAll();
    }

    @Post()
    async createNewProduct(@Body() nProduct: ProductsEntity, @Body('category', ParseIntPipe) pp: number ){
        await this.categoryService.findById(pp).then((value) => {
            nProduct.id_category = value});
            
        this.productService.insertNew(nProduct);
        
    }

    @Get('/findBycantity')
    async p(@Query('cant', ParseIntPipe) cant:number, @Query('filter') filter:string){
        return this.productService.findAllByCantity(cant, filter);
    }
    @Get('/findByDescription')
    async d(@Query('description') desc:string){
        return this.productService.findProductByDescription(desc);
    }
    
    @Get('/findByCategory')
    async findAllByCategoryID(@Query('id', ParseIntPipe) id_category:number){
        await this.categoryService.findById(id_category);
        return this.productService.showAllByCategory(id_category);

    }

    @Get(':id')
    findByID(@Param('id', ParseIntPipe) id: number){
        return this.productService.showByID(id);
        
    }
    

    @Patch(':id')
    modifyProduct(@Param('id', ParseIntPipe) id: number, @Body() mProduct: ProductsEntity){
        this.productService.modifyProduct(id, mProduct);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
        this.productService.deleteProduct(id);
    }
}