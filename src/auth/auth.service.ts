import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Owner } from '../owner/entities/owner.entity';
import { JwtService } from '@nestjs/jwt'
import { OwnerService } from '../owner/owner.service';
import  * as bcrypt from 'bcrypt'
import { CreateOwnerDto } from '../owner/dto/create-owner.dto';
import { OwnerRepository } from '../owner/owner.repository';


@Injectable()
export class AuthService {
  constructor( private ownerRepository: OwnerRepository,
    private jwtService: JwtService) {}

    async hashPassword (password: string): Promise<string>{
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds)
    }
  
    async comparePassword (userPassword: string, hashPassword: string): Promise<boolean>{
      return bcrypt.compare(userPassword, hashPassword)
    }

    async registration(registrationData: CreateOwnerDto){
      const hashPassword = await this.hashPassword(registrationData.password)
      return hashPassword
    }

    async logIn (createOwnerDto: CreateOwnerDto): Promise<{ access_token: string}> {
      const email = createOwnerDto.email;
      const password = createOwnerDto.password;

      const owner = await this.ownerRepository.findByEmail(email);
      const hashedPassword = owner.password

      const isLogIn = await this.comparePassword(password, hashedPassword)
      if(isLogIn){
        const payload = {sub: email, password, role: "owner"};
        return  {access_token: await this.jwtService.signAsync(payload)};
      }
    }
}
