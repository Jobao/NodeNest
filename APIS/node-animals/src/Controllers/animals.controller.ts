import {  Controller, Get, Post, Body} from '@nestjs/common';
import { CreateAnimalsDTO } from 'src/DTO/createAnimals.dto';
import { Animals } from 'src/intefaces/animal.interface';
import { AnimalsService } from 'src/Providers/animal.service';

@Controller("API/Animals")
export class AnimalsController{
    constructor(private animalService: AnimalsService){}

    @Post()
    create (@Body() createAnimalsDTO: CreateAnimalsDTO){
        this.animalService.create(createAnimalsDTO)
        console.log(createAnimalsDTO);
      }

    @Get()
    findAll(){
        return this.animalService.findAll();
    }
}