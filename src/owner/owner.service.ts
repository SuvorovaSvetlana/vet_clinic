import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity'


@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

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
    return await this.ownerRepository.findOne({where: {id}});
  }

  async allAnimalsOfOwner(id: number): Promise <Owner>{
    return await this.ownerRepository.findOne({relations:["animals"], where: {id}})
  }
    
  async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise <Owner> {
    const owner = await this.ownerRepository.findOne({
      relations:{
        animals: true
      },
      where: {
        id
      }
    }) 
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
