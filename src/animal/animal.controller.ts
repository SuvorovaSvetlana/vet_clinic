import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { request } from 'http';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post('/login')
  async create(@Request() req, @Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const {id, role} = req.user
    if(role === 'owner'){
      return this.animalService.create(createAnimalDto, id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get()
  async findAll(@Request() req) {
    const role = req.user.role;
    if(role === 'admin' || role === 'vet'){
      return await this.animalService.findAll();
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.animalService.findOne(+id);
  }

  @Patch('/changeData')
  async update(@Request() req, @Body() updateAnimalDto: UpdateAnimalDto) {
    const role = req.user.role;
    if(role === 'admin' || role === 'owner'){
      return this.animalService.update(updateAnimalDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise <void> {
    return this.animalService.remove(+id);
  }
}
