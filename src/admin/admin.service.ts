import { Injectable } from '@nestjs/common';
import { AuthServiceAdmin } from '../auth/auth.service';
import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    private authService: AuthServiceAdmin,
    private readonly adminRepository: AdminRepository) {}


  async createAdmin (createAdminDto: CreateAdminDto): Promise <Admin> {
    const admin = new Admin();
    admin.adminName =createAdminDto.adminName;
    admin.email = createAdminDto.email;
    admin.password = await this.authService.registration(createAdminDto)
    return await this.adminRepository.save(admin)
  }

  async authAdmin(createAdminDto: CreateAdminDto): Promise<any>{
    const token = await this.authService.logIn(createAdminDto)
    console.log(token)
    return token
  }

  async findAll(): Promise <Admin[]>  {
    return await this.adminRepository.find();
  }

  async findOne(id: number) {
    return await this.adminRepository.findOne(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise <Admin> {
    const {adminName, email} = updateAdminDto;
    const admin = await this.adminRepository.findOne(id)
    if(adminName){
      admin.adminName = adminName
    }
    if(email){
      admin.email = email;
    }
    return await this.adminRepository.save(admin);
  }

  async remove(id: number): Promise<void> {
     await this.adminRepository.delete(id);
   }
}
