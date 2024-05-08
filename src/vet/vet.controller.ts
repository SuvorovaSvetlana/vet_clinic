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
  async create(@Request() req, @Body() createVetDto: CreateVetDto): Promise<Vet> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.createVet(createVetDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Public()
  @Post('/login')
  async LogIn(@Body() createVetDto: CreateVetDto) {
    return await this.vetService.authVet(createVetDto)
  }

  @Get()
  async findAll(@Request() req) {
    const role = req.user.role;
    if(role==='admin'||role === 'vet'){
      return await this.vetService.findAll();
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }  
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.findOne(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    } 
  }

  @Patch(':id')
  async update(@Request() req, @Body() updateVetDto: UpdateVetDto, @Param('id') id:string) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.update(+id, updateVetDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Delete(':id')
  async remove(@Request() req, @Param('id') id:string): Promise<void> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.vetService.remove(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
}

