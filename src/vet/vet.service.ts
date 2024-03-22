import { Injectable } from '@nestjs/common';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
import { VetRepository } from './vet.repository';

@Injectable()
export class VetService {
  constructor(private readonly vetRepository: VetRepository) {}

  async create(createVetDto: CreateVetDto): Promise <Vet> {
    const vet = new Vet();
    vet.full_name = createVetDto.full_name;
    vet.speciality = createVetDto.speciality;
    return await this.vetRepository.save(vet);
  }

  async findAll(): Promise <Vet[]> {
    return await this.vetRepository.find();
  }

  async findOne(id: number): Promise <Vet> {
    return await this.vetRepository.findOne(id);
  }

  async update(id: number, updateVetDto: UpdateVetDto): Promise<Vet> {
    const vet = await this.vetRepository.findOne(id);
    const {full_name, speciality} = updateVetDto;
    if(full_name){
      vet.full_name = full_name;
    }
    if(speciality){
      vet.speciality = speciality;
    }
    return await this.vetRepository.save(vet);
  }

  async remove(id: number): Promise<void> {
    await this.vetRepository.delete(id);
  }
}
