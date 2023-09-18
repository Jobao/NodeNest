import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../Entities/product.entity';
import { CategoryEntity } from '../Entities/category.entity';
import { ProductService } from '../Service/product.service';
import { ProductsController } from '../Controllers/product.controller';
import { CategoriesController } from '../Controllers/category.controller';
import { CategoryService } from '../Service/category.service';
import { ClientModule } from './client.module';
import { EmpleadosModule } from './empleados.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
        database: 'inventoryapi2',
        entities: [ProductsEntity, CategoryEntity],
        synchronize: true,
        autoLoadEntities: true,
  }), TypeOrmModule.forFeature([ProductsEntity, CategoryEntity]), ClientModule, EmpleadosModule],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductService, CategoryService],
})
export class AppModule {}
