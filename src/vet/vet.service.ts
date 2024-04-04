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
    vet.firstName = createVetDto.firstName;
    vet.lastName = createVetDto.lastName;
    vet.speciality = createVetDto.speciality;
    vet.experience = createVetDto.experience;
    vet.foto = createVetDto.foto;
    
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
    const {firstName, lastName, speciality, experience, foto} = updateVetDto;
    if(firstName){
      vet.firstName = firstName;
    }
    if(lastName){
      vet.lastName = lastName;
    }
    if(speciality){
      vet.speciality = speciality;
    }
    if(experience){
      vet.experience = experience;
    }
    if(foto){
      vet.foto = foto;
    }
    return await this.vetRepository.save(vet);
  }

  async remove(id: number): Promise<void> {
    await this.vetRepository.delete(id);
  }
}
