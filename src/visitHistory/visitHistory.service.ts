import { Injectable } from "@nestjs/common";
import { VisitHistoryRepository } from "./visitHistory.repository";
import { CreateVisitHistoryDto } from "./dto/create-visitHistory.dto";
import { VisitHistory } from "./entities/visitHistory.entity";
import { UpdateVisitHistoryDto } from "./dto/update-visitHistory.dto";

@Injectable()
export class VisitHistoryService {
  constructor(private readonly visitHistoryRepository: VisitHistoryRepository){}

  async create (createVisitHistoryDto: CreateVisitHistoryDto): Promise <VisitHistory>{
      const visitHistory = new VisitHistory();
      visitHistory.visitDate = createVisitHistoryDto.visitDate;
      visitHistory.orders = createVisitHistoryDto.orders;
      visitHistory.animalId = createVisitHistoryDto.animalId;
      visitHistory.vetId = createVisitHistoryDto.vetId;
      visitHistory.visitPurpose = createVisitHistoryDto.visitPurpose;
      return await this.visitHistoryRepository.save(visitHistory)
  }

  async findAll(): Promise <VisitHistory[]> {
    return await this.visitHistoryRepository.find();
  }

  async findOne(id: number): Promise<VisitHistory>{
    return await this.visitHistoryRepository.findOne(id);
  }

  async update(id: number, updateVisitHistoryDto: UpdateVisitHistoryDto): Promise <VisitHistory> {
      const visitHistory = await this.visitHistoryRepository.findOne(id);
      const {visitDate, vetId, animalId, orders, visitPurpose} = updateVisitHistoryDto;
      if(visitDate){
            visitHistory.visitDate = visitDate;
      }
      if(vetId){
            visitHistory.vetId = vetId;
      }
      if(animalId){
            visitHistory.animalId = animalId;
      }
      if(orders){
            visitHistory.orders =orders;
      }
      if(visitPurpose){
            visitHistory.visitPurpose = visitPurpose
      }
      return await this.visitHistoryRepository.save(visitHistory)
  }

  async remove(id: number): Promise <void> {
     await this.visitHistoryRepository.delete(id);
  }
}