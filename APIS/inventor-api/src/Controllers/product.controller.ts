import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CategoryService } from "src/Service/category.service";
import { ProductService } from "src/Service/product.service";
import { CreateProductDto } from "src/dto/products/create-product.dto";


@Controller('API/Products')
export class ProductsController{
    constructor(private productService: ProductService, private categoryService: CategoryService){}

    @Get()
    findAll(){
        return this.productService.showAll();
    }

    @Post()
    async createNewProduct(@Body() nProduct: CreateProductDto){

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
        return this.productService.findById(id);
    }
    

    @Patch(':id')
    modifyProduct(@Param('id', ParseIntPipe) id: number, @Body() mProduct: CreateProductDto){
        return this.productService.modifyProduct(id, mProduct);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
        return this.productService.deleteProduct(id);
        
    }
}