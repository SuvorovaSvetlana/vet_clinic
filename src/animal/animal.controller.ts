import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './entities/animal.entity';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async create(@Request() req, @Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const {id, role} = req.user
    if(role === 'owner'){
      return this.animalService.create(createAnimalDto, id);
    }else {
      // if admin, find owner by id
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

  @Patch(':id')
  async update( @Param('id') id: string, @Request() req, @Body() updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const role = req.user.role;
    if(role === 'admin'){
      return this.animalService.update(+id, updateAnimalDto, 0);
    }else {
      if(role === 'owner'){
        const ownerId = req.user.id;
        console.log(ownerId)
        return this.animalService.update(+id, updateAnimalDto, ownerId);
      }
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise <void> {
    return this.animalService.remove(+id);
  }
}
