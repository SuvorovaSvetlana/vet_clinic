import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "./entities/admin.entity";


@Injectable()
export class AdminRepository{
      constructor(
            @InjectRepository(Admin)
            private readonly adminRepo: Repository<Admin>
      ){}
      public async save(owner: Admin){
            return await this.adminRepo.save(owner)
      }
      public async find(){
            return await this.adminRepo.find()
      }
      public async findByEmail(email: string){
            return await this.adminRepo.findOneBy({email})
      }
      public async findOne(id: number){
            return await this.adminRepo.findOne({where: {id}})
      }
      public async delete(id: number){
            return await this.adminRepo.delete(id)
      }

}