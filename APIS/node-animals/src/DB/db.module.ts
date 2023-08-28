import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_AnimalesEntity } from './Entities/db.animals.entity';
import { DataSource } from 'typeorm';
import { DB_AnimalService } from './db.service';
import { DB_AnimalsController } from './db.animals.controller';
import { DB_AnimalProviders } from './db.animals.provider';
import { DB_RazaEntity } from './Entities/db.raza.entity';


@Module({
    imports: [
      TypeOrmModule.forFeature([DB_AnimalesEntity, DB_RazaEntity]),
    ],
    providers:[DB_AnimalService],
    controllers:[DB_AnimalsController],
  })
  export class DBModule {
  }