import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';

@Controller('visits')
export class VisitController {
  constructor(private readonly visitService: VisitService) {}

  @Post()
  async create(@Body() createVisitDto: CreateVisitDto): Promise<Visit> {
    return await this.visitService.create(createVisitDto);
  }

  @Get()
  async findAll(): Promise<Visit[]> {
    return await this.visitService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.visitService.findOne(+id);
  }

  @Get(':vetId')
  async findAllVisitsOfOneVet(@Param('vetId') vetId: string){
    return await this.visitService.findAllVisitsOfOneVet(+vetId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVisitDto: UpdateVisitDto) {
    return await this.visitService.update(+id, updateVisitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.visitService.remove(+id);
  }
}
