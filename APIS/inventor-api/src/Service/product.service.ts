import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/Entities/product.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(ProductsEntity)
        private productRepository: Repository<ProductsEntity>
    ) {}

    showAll(){
        var p = this.productRepository.find();//.then(value =>{console.log(value[0].desc)});
        
        return p;
    }

    showAllByCategory(id:number){
        return this.productRepository.findBy({
            id_category: Equal(id),
        });
    }

    showByID(id: number): Promise<ProductsEntity | null>{
        return this.productRepository.findOneBy({id})
    }

    insertNew(pNew: ProductsEntity){
        this.productRepository.insert(pNew);
    }
}