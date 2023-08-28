import { DataSource } from 'typeorm';
import { AnimalesEntity } from './db.animals.entity';

export const DB_AnimalProviders = [
    {
      provide: 'ANIMAL_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(AnimalesEntity),
      inject: ['DATA_SOURCE'],
    },
  ];