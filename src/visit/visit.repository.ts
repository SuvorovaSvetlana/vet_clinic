import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Visit } from "./entities/visit.entity"

export class VisitRepository {
      constructor(
            @InjectRepository(Visit)
            private readonly visitRepo: Repository<Visit>
          ){}
         public async save(visit: Visit) {
            return await this.visitRepo.save(visit)
         } 
         public async find(){
            return await this.visitRepo.find()
         }
         public async findOne(id: number){
            return await this.visitRepo.findOne({where: {id}})
         }
         public async delete(id: number){
            return await this.visitRepo.delete(id)
         }
}
