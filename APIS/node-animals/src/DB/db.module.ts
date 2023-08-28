import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalesEntity } from './db.animals.entity';
import { DataSource } from 'typeorm';
import { DB_AnimalService } from './db.service';
import { DB_AnimalsController } from './db.animals.controller';
import { DB_AnimalProviders } from './db.animals.provider';


@Module({
    imports: [
      TypeOrmModule.forFeature([AnimalesEntity]),
    ],
    providers:[DB_AnimalService],
    controllers:[DB_AnimalsController],
  })
  export class DBModule {
  }