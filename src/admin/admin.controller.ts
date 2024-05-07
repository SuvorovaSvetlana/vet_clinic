import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post()
  create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Public()
  @Post('/login')
  async LogIn(@Body() createAdminDto: CreateAdminDto) {
    return await this.adminService.authAdmin(createAdminDto)
  }

  @Get()
  async findAll(@Request() req) {  
    const role = req.user.role;
    if(role === 'admin'){
      return this.adminService.findAll();  
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    const role = req.user.role;
    if(role === 'admin'){
      return this.adminService.findOne(+id);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Patch(':id')
  async update(@Param('id') id:string, @Request() req, @Body() updateAdminDto: UpdateAdminDto) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.adminService.update(+id, updateAdminDto);
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Delete(':id')
  async remove(@Request() req, @Body() adminName: string) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.adminService.remove(adminName) 
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
}
