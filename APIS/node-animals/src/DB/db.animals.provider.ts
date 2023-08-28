import { DataSource } from 'typeorm';
import { DB_AnimalesEntity } from './Entities/db.animals.entity';

export const DB_AnimalProviders = [
    {
      provide: 'ANIMAL_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(DB_AnimalesEntity),
      inject: ['DATA_SOURCE'],
      
    },
  ];