import { Module } from '@nestjs/common';
import { AnimalsController } from './Controllers/animals.controller';
import { AnimalsService } from './Providers/animal.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //imports: [TypeOrmModule.forRoot()],
  imports:[],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AppModule {}
