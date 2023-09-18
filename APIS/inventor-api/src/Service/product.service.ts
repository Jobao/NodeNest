import { Injectable, Inject, Patch, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/Entities/category.entity';
import { ProductsEntity } from 'src/Entities/product.entity';
import { Equal, FindManyOptions, FindOptionsWhere, LessThan, Like, MoreThan, Repository } from 'typeorm';
import { CategoryService } from './category.service';
import { log } from 'console';
import { GetProductDto } from 'src/dto/products/get-product.dto';
import { CreateProductDto } from 'src/dto/products/create-product.dto';

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(ProductsEntity)
        private productRepository: Repository<ProductsEntity>,
        private categoryService: CategoryService
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

    async findById(id: number): Promise<GetProductDto>{
        return this.productRepository.findOneBy({id}).then((result) => {
            if(result != null){
                let res: GetProductDto={
                    id: result.id,
                    desc: result.desc,
                    cantidad: result.cantidad,
                    categoryDesc: result.id_category.desc

                };

                return res;
            }
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        });
    }
    /**
     * Busca todos los productos con una cantidad dada.
     * @param cant 
     * @param filter Must EQUAL, MORE, LESS
     * @returns 
     */
    async findAllByCantity(cant: number, filter: string){
        let result: GetProductDto[]=[];
        let finder: FindOptionsWhere<ProductsEntity>;

        
        switch(filter.toUpperCase()){
            case this.findByCantityOperations.Equal:{
                finder={cantidad: Equal(cant)};
                break;
            }
            case this.findByCantityOperations.More:{
                finder.cantidad = MoreThan(cant);
                break;
            }
            case this.findByCantityOperations.Less:{
                finder.cantidad = LessThan(cant);
                break;
            }
            default:{
                throw new HttpException('Invalidad filter (Must be '+ this.findByCantityOperations.Equal +  ',' + this.findByCantityOperations.More +  ',' + this.findByCantityOperations.Less +')', HttpStatus.BAD_REQUEST);
            }
        }

       await this.productRepository.find({where: finder}).then((ret) =>{
        ret.forEach(element => {
            let aux: GetProductDto={
                id: element.id,
                desc: element.desc,
                cantidad: element.cantidad,
                categoryDesc: element.id_category.desc
            };
            result.push(aux);
        });
    
    });
       return result;
    }

    async findProductByDescription(description: string){
        if(description !== ''){
            let result: GetProductDto[]=[];
            return await this.productRepository.find({
                where: {
                    //SQL Injection ?????!!!!!
                    desc:  Like(`%${description}%`)
                }
            }).then((ret) =>{
                ret.forEach(element => {
                    let aux: GetProductDto={
                        id: element.id,
                        desc: element.desc,
                        cantidad: element.cantidad,
                        categoryDesc: element.id_category.desc
                    };
                    result.push(aux);
                })

                return result;
            });
        }
        throw new HttpException('DESCRIPTION must have a valid string', HttpStatus.BAD_REQUEST);
    }

    async insertNew(pNew: CreateProductDto){
        /*let cat: CategoryEntity;
        cat = await this.categoryService.findById(pNew.id_category.id);
        let ent: ProductsEntity={
            desc: pNew.desc,
            cantidad: pNew.cantidad,
            id_category: cat
        }*/
        return this.productRepository.insert(pNew);
    }
    //BUG #1
    async modifyProduct(id: number, pModified: CreateProductDto){
        return (await this.productRepository.update(id, pModified)).affected;
    }

    async deleteProduct(id: number){
        return (await this.productRepository.delete(id)).affected;
    }
}