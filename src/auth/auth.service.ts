import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import  * as bcrypt from 'bcrypt'
import { AdminRepository } from '../admin/admin.repository';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { CreateOwnerDto } from '../owner/dto/create-owner.dto';
import { OwnerRepository } from '../owner/owner.repository';
import { CreateVetDto } from '../vet/dto/create-vet.dto';
import { VetRepository } from '../vet/vet.repository';

interface IAuthService<T> {
  logIn(args: T): Promise<any>;
  registration(args: T): Promise<string>;
}

class BaseAuthService<T> implements IAuthService<T> {
  async hashPassword (password: string): Promise<string>{
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds)
  }
  async comparePassword (userPassword: string, hashPassword: string): Promise<boolean>{
    return bcrypt.compare(userPassword, hashPassword)
  }
  async logIn(args: T): Promise<any> {
    throw new Error("Not implemented");
  }
  async registration(args: T): Promise<string> {
    throw new Error("Not implemented");  
  }
}

@Injectable()
export class AuthServiceOwner extends BaseAuthService<CreateOwnerDto> {
  constructor( private ownerRepository: OwnerRepository,
    private jwtService: JwtService) {
      super();
    }

    async registration(registrationData: CreateOwnerDto){
      const hashPassword = await this.hashPassword(registrationData.password)
      return hashPassword
    }

    async logIn (createOwnerDto: CreateOwnerDto): Promise<{ access_token: string}> {
      const email = createOwnerDto.email;
      const password = createOwnerDto.password;
      
      const owner = await this.ownerRepository.findByEmail(email);
      const hashedPassword = owner.password;
      const id = owner.id;

      const isLogIn = await this.comparePassword(password, hashedPassword)
      if(isLogIn){
        const payload = {id, email, password, role: "owner"};
        return  {access_token: await this.jwtService.signAsync(payload)};
      }
    }
}

@Injectable()
export class AuthServiceAdmin extends BaseAuthService<CreateAdminDto> {
  constructor( private adminRepository: AdminRepository,
    private jwtService: JwtService) {
      super();
    }

    async registration(registrationData: CreateAdminDto){
      const hashPassword = await this.hashPassword(registrationData.password)
      return hashPassword
    }

    async logIn (createAdminDto: CreateAdminDto): Promise<{ access_token: string}> {
      const email = createAdminDto.email;
      const password = createAdminDto.password;
      
      const admin = await this.adminRepository.findByEmail(email);
      const hashedPassword = admin.password;
      const id = admin.id;

      const isLogIn = await this.comparePassword(password, hashedPassword)
      if(isLogIn){
        const payload = {id, email, password, role: "admin"};
        return  {access_token: await this.jwtService.signAsync(payload)};
     }
    }
  }

  @Injectable()
export class AuthServiceVet extends BaseAuthService<CreateVetDto> {
  constructor( private vetRepository: VetRepository,
    private jwtService: JwtService) {
      super();
    }

    async registration(registrationData: CreateVetDto){
      const hashPassword = await this.hashPassword(registrationData.password)
      return hashPassword
    }

    async logIn (createVetDto: CreateVetDto): Promise<{ access_token: string}> {
      const email = createVetDto.email;
      const password = createVetDto.password;
      
      const vet = await this.vetRepository.findByEmail(email);
      const hashedPassword = vet.password;
      const id = vet.id;

      const isLogIn = await this.comparePassword(password, hashedPassword)
      if(isLogIn){
        const payload = {id, email, password, role: "vet"};
        return  {access_token: await this.jwtService.signAsync(payload)};
     }
    }
  }