import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Vet } from "./entities/vet.entity";

export class VetRepository{
      constructor( @InjectRepository(Vet)
      private readonly vetRepo: Repository<Vet>){}

      public async save(vet: Vet){
            return await this.vetRepo.save(vet)
      }
      public async find(){
            return await this.vetRepo.find({relations:{visits: true}})
      }
      public async findOne(id: number){
            return await this.vetRepo.findOne({
                  relations: {visits: true},
                  where: {id}
                })
      }
      public async findByEmail(email: string){
            return await this.vetRepo.findOneBy({email})
      }

      public async delete(id: number){
            return await this.vetRepo.delete(id)
      }

}