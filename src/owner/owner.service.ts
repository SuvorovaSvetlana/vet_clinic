import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './owner.entity'
import { OwnerRepository } from './owner.repository';
import  * as bcrypt from 'bcrypt'



@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async hashPassword (password: string): Promise<string>{
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds)
  }
 
 async createOwner(createOwnerDto: CreateOwnerDto): Promise <Owner> {
  const owner = new Owner();
  owner.userName = createOwnerDto.userName;
  owner.email = createOwnerDto.email;
  const hashPassword = await this.hashPassword(createOwnerDto.password)
  owner.password = hashPassword;
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
    const {userName, email} = updateOwnerDto;
    if(userName){
      owner.userName = userName;
    }
    if(email){
      owner.email = email;
    }
    return await this.ownerRepository.save(owner);
  }
   
  async remove(id: number): Promise<void> {
    await this.ownerRepository.delete(id);
  }
}
