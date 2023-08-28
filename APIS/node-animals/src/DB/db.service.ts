import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalesEntity } from './db.animals.entity';

@Injectable()
export class DB_AnimalService{
    constructor(
        @InjectRepository(AnimalesEntity)
        @Inject('ANIMAL_REPOSITORY')
        private usersRepository: Repository<AnimalesEntity>,
      ) {}

      async findAll(): Promise<AnimalesEntity[]> {
        return await  this.usersRepository.find();
      }

      p(): AnimalesEntity[]{
        console.log("AAA");
        return undefined;
      }
      c(): AnimalesEntity[]{
        console.log("ccc");
        return undefined;
      }

      newAnimal(nAnimal: AnimalesEntity){
        this.usersRepository.insert(nAnimal);
      }
}