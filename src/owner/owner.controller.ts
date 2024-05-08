import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
import { Public } from '../auth/public.decorator';


@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Public()
  @Post()
  async createOwner(@Body() createOwnerDto: CreateOwnerDto): Promise <Owner>{
    return  await this.ownerService.createOwner(createOwnerDto)
  }
 
  @Public()
  @Post('/login')
  async logIn(@Body() createOwnerDto: CreateOwnerDto) {
    return await this.ownerService.authOwner(createOwnerDto)
  }

  @Get()
  async findAll(@Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.ownerService.findAll();
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.ownerService.findOne(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
   

  @Patch(':id')
  async update(@Param('id') id: string, @Request() req, @Body()  updateOwnerDto: UpdateOwnerDto) {
    const role = req.user.role;
    const ownerId = req.user.id;
    if(role === 'admin'){
      return await this.ownerService.update(+id, updateOwnerDto);
    }else{
      if(role === 'owner' && ownerId === +id){
        return await this.ownerService.update(+id, updateOwnerDto);
      }else{
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req): Promise <void> {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.ownerService.remove(+id);
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }
}
