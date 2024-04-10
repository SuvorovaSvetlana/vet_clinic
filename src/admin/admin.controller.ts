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

  @Get('/login')
  async findAll(@Request() req) {  
    const role = req.user.role;
    if(role === 'admin'){
      return this.adminService.findAll();  
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch('/login/changeData')
  async update( @Request() req, @Body() updateAdminDto: UpdateAdminDto) {
    console.log(req.user)
    return await this.adminService.update(updateAdminDto);
  }

  @Delete('/login')
  async remove(@Request() req, @Body() adminName: string) {
    const role = req.user.role;
    if(role === 'admin'){
      return await this.adminService.remove(adminName) 
    }else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }
}
