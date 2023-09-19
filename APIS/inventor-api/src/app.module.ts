import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './Entities/product.entity';
import { CategoryEntity } from './Entities/category.entity';
import { ProductService } from './Service/product.service';
import { ProductsController } from './Controllers/product.controller';
import { CategoriesController } from './Controllers/category.controller';
import { CategoryService } from './Service/category.service';
import { ClientModule } from './modules/client.module';
import { EmpleadosModule } from './modules/empleados.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
        database: 'inventoryapi2.sqlite3',
        entities: [ProductsEntity, CategoryEntity],
        synchronize: true,
        autoLoadEntities: true,
  }), TypeOrmModule.forFeature([ProductsEntity, CategoryEntity]), ClientModule, EmpleadosModule, AuthModule],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductService, CategoryService],
})
export class AppModule {}
