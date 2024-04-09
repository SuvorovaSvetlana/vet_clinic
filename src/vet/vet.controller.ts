import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetService } from './vet.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';

@Controller('vets')
export class VetController {
  constructor(private readonly vetService: VetService) {}

  @Post()
  async create(@Body() createVetDto: CreateVetDto): Promise<Vet> {
    return await this.vetService.createVet(createVetDto);
  }

  @Get()
  async findAll() {
    return await this.vetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vetService.findOne(+id);
  }

  @Patch(':id')
  async update(@Body() updateVetDto: UpdateVetDto) {
    return await this.vetService.update(updateVetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.vetService.remove(+id);
  }
}
