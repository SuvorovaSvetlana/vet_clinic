import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Owner } from "./entities/owner.entity";

export class OwnerRepository{
      constructor(
            @InjectRepository(Owner)
            private readonly ownerRepo: Repository<Owner>
      ){}
      public async save(owner: Owner){
            return await this.ownerRepo.save(owner)
      }
      public async find(){
            return await this.ownerRepo.find()
      }
      public async findOne(id: number){
            return await this.ownerRepo.findOne({relations:{animals: true}, where: {id}})
      }
      public async delete(id: number){
            return await this.ownerRepo.delete(id)
      }

}