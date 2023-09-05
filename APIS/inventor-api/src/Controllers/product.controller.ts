import { Controller, Get, Param, Query, Put, Body } from "@nestjs/common";
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
    @Get('/findByCategory')
    findAllByCategoryID(@Query('id', ParseIntPipe) query:number){
        return this.productService.showAllByCategory(query);

    }

    @Get(':id')
    findByID(@Param('id') id: number){
        return this.productService.showByID(id);
        
    }
    @Put()
    createNewProduct(@Body() nProduct: ProductsEntity){
        this.categoryService.getById(nProduct.id_category.id).then((nuevo) =>{nProduct.id_category = nuevo});
        this.productService.insertNew(nProduct);
        
    }

    

   
}