import { InjectRepository } from "@nestjs/typeorm"
import { VisitHistory } from "./entities/visitHistory.entity"
import { Repository } from "typeorm"

export class VisitHistoryRepository{
      constructor(
            @InjectRepository(VisitHistory)
            private readonly visitHistoryRepo: Repository<VisitHistory>
      ){}
      public async save(visitHistory: VisitHistory){
            return await this.visitHistoryRepo.save(visitHistory)
      }
      public async find(){
            return await this.visitHistoryRepo.find()
      }
      public async findOne(id: number){
            return await this.visitHistoryRepo.findOne({where: {id}})
      }
      public async delete(id: number){
            return await this.visitHistoryRepo.delete(id)
      }
}