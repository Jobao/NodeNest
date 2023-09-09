import { Injectable, Inject, Patch, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/Entities/product.entity';
import { Equal, LessThan, MoreThan, Repository } from 'typeorm';

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
     * IF the category does not exist it throws an exception (404)
     * @param id Category ID
     * @returns 
     */
    async showAllByCategory(id:number){
        return this.productRepository.findBy({
            id_category: Equal(id),
        });
    }

    async showByID(id: number): Promise<ProductsEntity>{
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

    insertNew(pNew: ProductsEntity){
        this.productRepository.insert(pNew);
    }
    
    modifyProduct(id: number, pModified: ProductsEntity){
        this.productRepository.update(id, pModified);
    }

    deleteProduct(id: number){
        this.productRepository.delete(id);
    }
}