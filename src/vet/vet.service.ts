import { Injectable } from '@nestjs/common';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VetService {
  constructor(
    @InjectRepository(Vet)
    private readonly vetRepository: Repository<Vet>
  ) {}


  async create(createVetDto: CreateVetDto): Promise <Vet> {
    const vet = new Vet();
    vet.full_name = createVetDto.full_name;
    vet.speciality = createVetDto.speciality;
    return await this.vetRepository.save(vet);
  }

  async findAll(): Promise <Vet[]> {
    return await this.vetRepository.find({
      relations:{
        visits: true
      }
    });
  }

  async findOne(id: number): Promise <Vet> {
    return await this.vetRepository.findOne({
      relations:{
        visits: true
      },
      where: {
        id
      }
    });
  }


  async update(id: number, updateVetDto: UpdateVetDto): Promise<Vet> {
    const vet = await this.vetRepository.findOne({
      relations: {
        visits: true
      },
      where: {
        id
      }
    });
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
