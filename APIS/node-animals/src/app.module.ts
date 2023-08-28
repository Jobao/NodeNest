import { Module } from '@nestjs/common';
import { AnimalsController } from './Controllers/animals.controller';
import { AnimalsService } from './Providers/animal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_AnimalesEntity } from './DB/Entities/db.animals.entity';
import { DB_AnimalService } from './DB/db.service';
import { DB_AnimalsController } from './DB/db.animals.controller';
import { DBModule } from './DB/db.module';
import { DB_AnimalProviders } from './DB/db.animals.provider';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
        host: '192.168.1.69',
        port: 3306,
        username: 'myuser',
        password: 'mypass',
        database: 'nested',
        entities: [DB_AnimalesEntity],
        synchronize: true,
        autoLoadEntities: true,
  }), TypeOrmModule.forFeature([DB_AnimalesEntity]), DBModule], 
  //imports:[],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AppModule {}
