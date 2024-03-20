import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { Owner } from 'src/owner/entities/owner.entity';
import { AnimalType } from '../entities/animal.entity';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
      animal_type: AnimalType;
      name: string;
      age: number;
      owner: Owner;
}
