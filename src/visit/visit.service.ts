import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
import { VisitRepository } from './visit.repository';

@Injectable()
export class VisitService {
  
 constructor(
    @InjectRepository(Visit)
    private readonly visitRepository: Repository<Visit>
  ){}
  
  async create(createVisitDto: CreateVisitDto) {
    const visit  = new Visit();
    visit.date = new Date();
    visit.vetName = createVisitDto.vetName;
    visit.animalName = createVisitDto.animalName;
    visit.visitPurpose = createVisitDto.visitPurpose;
    return await this.visitRepository.save(visit);
  }

  async findAll(): Promise<Visit[]> {
    return await this.visitRepository.find();
  }
  
  async findOne(id: number): Promise<Visit> {
    return await this.visitRepository.findOne({where: {id} });
  }

  async update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit> {
    const visit = await this.visitRepository.findOne({where: {id}});
    const {date, vetName, animalName, visitPurpose} = updateVisitDto;
    if(date){
      visit.date = date;
    }
    if(vetName){
      visit.vetName = vetName;
    }
    if(animalName){
      visit.animalName = animalName;
    }
    if(visitPurpose){
      visit.visitPurpose = visitPurpose;
    }
    return await this.visitRepository.save(visit);
  }

  async remove(id: number): Promise<void> {
    await this.visitRepository.delete(id);
  }
}
