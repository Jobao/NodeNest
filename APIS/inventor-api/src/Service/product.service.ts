import { Injectable, Inject, Patch, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/Entities/category.entity';
import { ProductsEntity } from 'src/Entities/product.entity';
import { Equal, LessThan, Like, MoreThan, Repository } from 'typeorm';
import { CategoryService } from './category.service';
import { log } from 'console';

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(ProductsEntity)
        private productRepository: Repository<ProductsEntity>
    ) {}

    readonly findByCantityOperations ={
        More: "MORE",
        Equal: "EQUAL",
        Less: "LESS"
    }

    showAll(){
        var p = this.productRepository.find();//.then(value =>{console.log(value[0].desc)});
        
        return p;
    }
    /**
     * Shows all products with a given category.
     * @param id Category ID
     * @returns 
     */
    async showAllByCategory(id:number){
        return this.productRepository.findBy({
            id_category: Equal(id),
        });
    }

    async findById(id: number): Promise<ProductsEntity>{
        return this.productRepository.findOneBy({id}).then((result) => {
            if(result != null){
                return result;
            }
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
    }

    async findAllByCantity(cant: number, filter: string){
        switch(filter.toUpperCase()){
            case this.findByCantityOperations.Equal:{
                return this.productRepository.find({
                    where: {
                        cantidad: Equal(cant)
                    }
                });
            }
            case this.findByCantityOperations.More:{
                return this.productRepository.find({
                    where: {
                        cantidad: MoreThan(cant)
                    }
                });
            }
            case this.findByCantityOperations.Less:{
                return this.productRepository.find({
                    where: {
                        cantidad: LessThan(cant)
                    }
                });
            }
            default:{
                throw new HttpException('Invalidad filter (Must be '+ this.findByCantityOperations.Equal +  ',' + this.findByCantityOperations.More +  ',' + this.findByCantityOperations.Less +')', HttpStatus.BAD_REQUEST);
            }
        }
    }

    async findProductByDescription(description: string){
        if(description !== ''){
            
            return this.productRepository.find({
                where: {
                    //SQL Injection ?????!!!!!
                    desc:  Like(`%${description}%`)
                }
            });
        }
        throw new HttpException('DESCRIPTION must have a valid string', HttpStatus.BAD_REQUEST);
    }

    insertNew(pNew: ProductsEntity){
        return this.productRepository.insert(pNew);
    }
    //BUG #1
    async modifyProduct(id: number, pModified: ProductsEntity){
        return (await this.productRepository.update(id, pModified)).affected;
    }

    async deleteProduct(id: number){
        return (await this.productRepository.delete(id)).affected;
    }
}