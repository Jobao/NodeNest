import { PartialType } from '@nestjs/swagger';
import { EmpleadoDto } from './create-empleado.dto';

export class UpdateEmpleadoDto extends PartialType(EmpleadoDto) {}
