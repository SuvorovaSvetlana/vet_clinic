import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal, AnimalType} from './entities/animal.entity';
import { Repository } from 'typeorm'; 

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>
  ){}

  async create (createAnimalDto: CreateAnimalDto): Promise <Animal>{
    const animal = new Animal();
    animal.animal_type = createAnimalDto.animal_type;
    animal.name = createAnimalDto.name;
    animal.age = createAnimalDto.age;
    animal.owner = createAnimalDto.owner;

    return await this.animalRepository.save(animal);
  }

  async findAll(): Promise <Animal[]> {
    return await this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal>{
    return await this.animalRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalRepository.findOne({
      relations:{
        owner: true,
      },
      where: {
        id
      }
    });
    const { animal_type, name, age } = updateAnimalDto;
    if(animal_type){
      animal.animal_type = animal_type;
    }
    if(name){
      animal.name = name;
    }
    if(age){
      animal.age = age;
    }
    return await this.animalRepository.save(animal) ;
  }

  async remove(id: number): Promise <void> {
     await this.animalRepository.delete(id);
  }
}
