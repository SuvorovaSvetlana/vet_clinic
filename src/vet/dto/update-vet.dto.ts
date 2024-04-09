import { PartialType } from '@nestjs/mapped-types';
import { CreateVetDto } from './create-vet.dto';

export class UpdateVetDto extends PartialType(CreateVetDto) {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      speciality: string;
      experience: string;
      foto: string;
      visits: [];
}

