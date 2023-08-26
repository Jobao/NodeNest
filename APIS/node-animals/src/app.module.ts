import { Module } from '@nestjs/common';
import { AnimalsController } from './Controllers/animals.controller';
import { AnimalsService } from './Providers/animal.service';

@Module({
  imports: [],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AppModule {}
