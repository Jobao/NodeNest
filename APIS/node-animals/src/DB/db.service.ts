import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DB_AnimalesEntity } from './Entities/db.animals.entity';

@Injectable()
export class DB_AnimalService{
    constructor(
        @InjectRepository(DB_AnimalesEntity)
        @Inject('ANIMAL_REPOSITORY')
        private usersRepository: Repository<DB_AnimalesEntity>,
      ) {}

      async findAll(): Promise<DB_AnimalesEntity[]> {
        return await  this.usersRepository.find();
      }

      p(): DB_AnimalesEntity[]{
        console.log("AAA");
        return undefined;
      }
      c(): DB_AnimalesEntity[]{
        console.log("ccc");
        return undefined;
      }

      newAnimal(nAnimal: DB_AnimalesEntity){
        this.usersRepository.insert(nAnimal);
      }
}