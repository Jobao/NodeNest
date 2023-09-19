import { Injectable } from '@nestjs/common';
import { EmpleadoDto } from '../dto/empleados/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/empleados/update-empleado.dto';
import { EmpleadoEntity } from 'src/Entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private empleadoRepository: Repository<EmpleadoEntity>
) {}
  create(createEmpleadoDto: EmpleadoDto) {
    return this.empleadoRepository.insert(createEmpleadoDto);
  }

  findAll() {
    return this.empleadoRepository.find();
  }

  findOne(id: number) {
    return this.empleadoRepository.findOneBy({id});
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadoRepository.update(id, updateEmpleadoDto);
  }

  remove(id: number) {
    return this.empleadoRepository.delete({id});
  }
}
