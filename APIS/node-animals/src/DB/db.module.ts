import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalesEntity } from './db.animals.entity';
import { DataSource } from 'typeorm';


@Module({
    imports: [
      TypeOrmModule.forRoot(require('APIS\node-animals\src\DB\db.config.ts')),
    ],
  })
  export class DBModule {
    constructor(private dataSource: DataSource) {}
  }