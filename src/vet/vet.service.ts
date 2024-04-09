import { Injectable } from '@nestjs/common';
import { AuthServiceVet } from '../auth/auth.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
import { VetRepository } from './vet.repository';

@Injectable()
export class VetService {
  constructor(
    private authService: AuthServiceVet,
    private readonly vetRepository: VetRepository) {}

  async createVet(createVetDto: CreateVetDto): Promise <Vet> {
    const vet = new Vet();
    vet.email = createVetDto.email;
    vet.password = await this.authService.registration(createVetDto)
    vet.firstName = createVetDto.firstName;
    vet.lastName = createVetDto.lastName;
    vet.speciality = createVetDto.speciality;
    vet.experience = createVetDto.experience;
    vet.foto = createVetDto.foto;
    return await this.vetRepository.save(vet);
  }
  
  async authVet(createVetDto: CreateVetDto): Promise<any>{
    const token = await this.authService.logIn(createVetDto)
    console.log(token)
    return token
  }
  async findAll(): Promise <Vet[]> {
    return await this.vetRepository.find();
  }

  async findOne(id: number): Promise <Vet> {
    return await this.vetRepository.findOne(id);
  }

  async update(updateVetDto: UpdateVetDto): Promise<Vet> {
    const {email, password, firstName, lastName, speciality, experience, foto} = updateVetDto;
    const vet = await this.vetRepository.findByEmail(email)
    if(email){
      vet.email = email;
    }
    if(password){
      vet.password = password;
    }
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
