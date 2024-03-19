import { PartialType } from '@nestjs/mapped-types';
import { CreateVetDto } from './create-vet.dto';

export class UpdateVetDto extends PartialType(CreateVetDto) {
      full_name: string;
      speciality: string;
      visits: [];
}

