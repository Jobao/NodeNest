import {  Controller, Get, Post, Body} from '@nestjs/common';
import { DB_AnimalService } from './db.service';
import { AnimalesEntity } from './db.animals.entity';


@Controller("API/Animals/DB")
export class DB_AnimalsController{
    constructor(private animalService: DB_AnimalService){}

    /*@Post()
    create (@Body() createAnimalsDTO: CreateAnimalsDTO){
        this.animalService.create(createAnimalsDTO)
        console.log(createAnimalsDTO);
      }
*/

    @Post()
    addNew(@Body() newAnimal: AnimalesEntity){
        this.animalService.newAnimal(newAnimal)
    }


    @Get()
    findAll(){
        return this.animalService.findAll();
    }

    @Get(':id')
    findByID(){
        return 'ff';
    }
}