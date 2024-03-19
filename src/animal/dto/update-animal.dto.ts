import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { Owner } from 'src/owner/entities/owner.entity';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
      animal_type: string;
      name: string;
      age: number;
      owner: Owner;
}
