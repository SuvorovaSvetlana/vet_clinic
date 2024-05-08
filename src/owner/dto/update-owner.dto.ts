import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDto } from './create-owner.dto';
import { Animal } from '../../animal/entities/animal.entity';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
      userName: string;
      email: string;
      password: string;
      animals: Array<Animal>;
}
