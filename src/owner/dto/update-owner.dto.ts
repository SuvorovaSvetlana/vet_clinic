import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDto } from './create-owner.dto';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
      full_name: string;
      contacts: string;
      animals: [];
}
