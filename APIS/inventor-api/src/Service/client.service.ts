import { Injectable, Query } from '@nestjs/common';
import { CreateClientDto } from '../dto/client/create-client.dto';
import { UpdateClientDto } from '../dto/client/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from '../Entities/client.entity';
import {FindOptionsWhere, Like, Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
      private clientRepository: Repository<ClientEntity>
  ){}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.insert(createClientDto)
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: number) {
    return this.clientRepository.findOneBy({id});
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientRepository.delete(id);
  }

  async filteredFind(@Query() query){
    var QueryOP: FindOptionsWhere<ClientEntity>[] = [];
    
    if(query['name']){
      QueryOP.push({name: Like(`%${query['name']}%`)});
      
    }

    if(query['address']){
      if(QueryOP.length > 0){
        QueryOP[0].address= Like(`%${query['address']}%`);
      }
    }
    
    return await this.clientRepository.find({where: QueryOP})
  }
}
