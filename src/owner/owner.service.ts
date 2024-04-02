import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './owner.entity'
import { OwnerRepository } from './owner.repository';


@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

 async createOwner(createOwnerDto: CreateOwnerDto): Promise <Owner> {
  const owner = new Owner();
  owner.full_name = createOwnerDto.full_name;
  owner.contacts = createOwnerDto.contacts;
  owner.animals = createOwnerDto.animals;
  return await this.ownerRepository.save(owner);
  }

  async findAll(): Promise <Owner[]> {
    return await this.ownerRepository.find();
  }

  async findOne(id: number): Promise <Owner> {
    return await this.ownerRepository.findOne(id);
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise <Owner> {
    const owner = await this.ownerRepository.findOne(id) 
    const {full_name, contacts} = updateOwnerDto;
    if(full_name){
      owner.full_name = full_name;
    }
    if(contacts){
      owner.contacts = contacts;
    }
    return await this.ownerRepository.save(owner);
  }
   
  async remove(id: number): Promise<void> {
    await this.ownerRepository.delete(id);
  }
}
