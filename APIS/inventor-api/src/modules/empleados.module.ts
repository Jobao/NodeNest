import { Module } from '@nestjs/common';
import { EmpleadosService } from '../Service/empleados.service';
import { EmpleadosController } from '../Controllers/empleados.controller';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
