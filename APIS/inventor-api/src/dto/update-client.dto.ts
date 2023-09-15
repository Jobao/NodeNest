import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsInt } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {


}
