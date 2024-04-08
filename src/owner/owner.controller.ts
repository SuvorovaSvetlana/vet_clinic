import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';


@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  async createOwner(@Body() createOwnerDto: CreateOwnerDto): Promise <Owner>{
    return  await this.ownerService.createOwner(createOwnerDto)
  }

  @Post('/login')
  async logIn(@Body() createOwnerDto: CreateOwnerDto) {
    return await this.ownerService.authOwner(createOwnerDto)
  }

  @Get()
  async findAll() {
    return await this.ownerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ownerService.findOne(+id);
  }
   
  @Patch(':id')
  async update(@Param('id') id: string, @Body()  updateOwnerDto: UpdateOwnerDto) {
    return await this.ownerService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise <void> {
    return this.ownerService.remove(+id);
  }
}
