import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { VetService } from './vet.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
import { Public } from '../auth/public.decorator';

@Controller('vets')
export class VetController {
  constructor(private readonly vetService: VetService) {}

  @Post()
  async create(@Body() createVetDto: CreateVetDto): Promise<Vet> {
    return await this.vetService.createVet(createVetDto);
  }

  @Public()
  @Post('/login')
  async LogIn(@Body() createVetDto: CreateVetDto) {
    return await this.vetService.authVet(createVetDto)
  }

  @Get('/login')
  async findAll(@Request() req) {
    const role = req.user.role;
    if(role==='admin'||role === 'vet'){
      return await this.vetService.findAll();
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }  
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vetService.findOne(+id);
  }

  @Patch('/login/changeData')
  async update(@Request() req, @Body() updateVetDto: UpdateVetDto) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.update(updateVetDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Delete('/login')
  async remove(@Request() req, @Body() lastName: string): Promise<void> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.remove(lastName);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
}

