import { Injectable } from '@nestjs/common';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
import { VisitRepository } from './visit.repository';

@Injectable()
export class VisitService {
  constructor (private readonly visitRepository: VisitRepository) {}
 
  async create(createVisitDto: CreateVisitDto): Promise<Visit> {
    const visit  = new Visit();
    visit.date = createVisitDto.date;
    visit.vet = createVisitDto.vet;
    visit.animal = createVisitDto.animal;

    const visits =  await this.visitRepository.find()
    const existsDate = visits.filter((exist)=> exist.date === visit.date)
    if(existsDate.length === 0){
      return await this.visitRepository.save(visit);
      // send email
    }else {
      const existsVisit = existsDate.filter((exist)=> exist.vet.id === visit.vet.id)
      if(existsVisit.length === 0){
        return await this.visitRepository.save(visit);
        // send email
      }else{
          return 
      }
    }
  }

  async findAll(): Promise<Visit[]> {
    return await this.visitRepository.find();
  }
  
  async findOne(id: number): Promise<Visit> {
    return await this.visitRepository.findOne(id);
  }

  async update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit> {
    const visit = await this.visitRepository.findOne(id);
    const {date, vet, animal} = updateVisitDto;
    if(date){
      visit.date = date;
    }
    if(vet){
      visit.vet = vet;
    }
    if(animal){
      visit.animal = animal;
    }
    return await this.visitRepository.save(visit);
  }
  
  async remove(id: number): Promise<void> {
    await this.visitRepository.delete(id);
  }
}
