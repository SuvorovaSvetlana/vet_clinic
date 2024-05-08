import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';

@Controller('visits')
export class VisitController {
  constructor(private readonly visitService: VisitService) {}

  @Post()
  async create(@Body() createVisitDto: CreateVisitDto, @Request() req): Promise<Visit> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.visitService.create(createVisitDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get()  
  async findAll(@Request() req): Promise<Visit[]> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.visitService.findAll();
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.visitService.findOne(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVisitDto: UpdateVisitDto, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.visitService.update(+id, updateVisitDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.visitService.remove(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
}
