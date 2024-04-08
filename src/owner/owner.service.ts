import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity'
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerService {
  constructor(
    private authService: AuthService,
    private readonly ownerRepository: OwnerRepository) {}

  async createOwner(createOwnerDto: CreateOwnerDto): Promise <Owner> {
    const owner = new Owner();
    owner.userName = createOwnerDto.userName;
    owner.email = createOwnerDto.email;
    owner.password = await this.authService.registration(createOwnerDto)
    return await this.ownerRepository.save(owner);
  }

  async authOwner(createOwnerDto: CreateOwnerDto): Promise<any>{
    const token = await this.authService.logIn(createOwnerDto)
    console.log(token)
    return token
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
