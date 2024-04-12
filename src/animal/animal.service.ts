import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal} from './entities/animal.entity';
import { AnimalRepository } from './animal.repositopy';

@Injectable()
export class AnimalService {
  constructor(private readonly animalRepository: AnimalRepository){}

  async create (createAnimalDto: CreateAnimalDto, id: number): Promise <Animal>{
    const animal = new Animal();
    animal.animalType = createAnimalDto.animalType;
    animal.breed = createAnimalDto.breed;
    animal.name = createAnimalDto.name;
    animal.dateOfBirth = createAnimalDto.dateOfBirth;
    animal.foto = createAnimalDto.foto;
    animal.ownerId = id;
    return await this.animalRepository.save(animal);
  }

  async findAll(): Promise <Animal[]> {
    return await this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal>{
    return await this.animalRepository.findOne(id);
  }

  async update(animalName: string, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalRepository.findByName(animalName);
    const { animalType, breed, name, dateOfBirth, foto } = updateAnimalDto;
    if(animalType){
      animal.animalType = animalType;
    }
    if(breed){
      animal.breed = breed;
    }
    if(name){
      animal.name = name;
    }
    if(dateOfBirth){
      animal.dateOfBirth = dateOfBirth;
    }
    if(foto){
      animal.foto = foto;
    }
    return await this.animalRepository.save(animal) ;
  }

  async remove(id: number): Promise <void> {
     await this.animalRepository.delete(id);
  }
}
