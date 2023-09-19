import { Module } from '@nestjs/common';
import { EmpleadosService } from '../Service/empleados.service';
import { EmpleadosController } from '../Controllers/empleados.controller';
import { EmpleadoEntity } from 'src/Entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoEntity])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
