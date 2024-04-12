import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Animal } from "./entities/animal.entity";

export class AnimalRepository{
      constructor(
            @InjectRepository(Animal)
            private readonly animalRepo: Repository<Animal>
      ){}
      public async save(animal: Animal){
            return await this.animalRepo.save(animal)
      }
      public async find(){
            return await this.animalRepo.find()
      }
      public async findOne(id: number){
            return await this.animalRepo.findOne({relations:{owner: true,},where: {id}})
      }
      public async findByName(name: string){
            return await this.animalRepo.findOneBy({name})
      }
      public async delete(id: number){
            return await this.animalRepo.delete(id)
      }
}