import { Injectable } from '@nestjs/common';
import { Animals} from '../intefaces/animal.interface';

@Injectable()
export class AnimalsService{
    private readonly animals_array:Animals[] = [];

    create(animal : Animals){
        this.animals_array.push(animal);
    }

    findAll() : Animals[]{
        return this.animals_array;
    }
}