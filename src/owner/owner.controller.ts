import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../role/roles.decorator';
import { Role } from '../role/role.enum';
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
  async findAll() {
    return await this.ownerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ownerService.findOne(+id);
  }
   

  @Patch('/login/changeData')
  async update( @Request() req, @Body()  updateOwnerDto: UpdateOwnerDto) {
    console.log(req.user)
    return await this.ownerService.update(updateOwnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise <void> {
    return this.ownerService.remove(+id);
  }
}
