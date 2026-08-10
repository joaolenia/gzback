import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOrder } from './entities/os.entitiy';

@Injectable()
export class OsService {
  constructor(
    @InjectRepository(ServiceOrder)
    private readonly osRepository: Repository<ServiceOrder>,
  ) {}

  async create(createOsDto: Partial<ServiceOrder>): Promise<ServiceOrder> {
    const newOs = this.osRepository.create(createOsDto);
    return await this.osRepository.save(newOs);
  }
  async findAll(): Promise<ServiceOrder[]> {
    return await this.osRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<ServiceOrder> {
    const os = await this.osRepository.findOne({ where: { id } });
    
    if (!os) {
      throw new NotFoundException(`Ordem de serviço #${id} não encontrada.`);
    }
    
    return os;
  }

  async update(id: number, updateOsDto: Partial<ServiceOrder>): Promise<ServiceOrder> {
    const existingOs = await this.findOne(id);

    this.osRepository.merge(existingOs, updateOsDto);

    return await this.osRepository.save(existingOs);
  }

  
}