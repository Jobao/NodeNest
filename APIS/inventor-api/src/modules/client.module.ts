import { Module } from '@nestjs/common';
import { ClientService } from '../Service/client.service';
import { ClientController } from '../Controllers/client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from '../Entities/client.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
