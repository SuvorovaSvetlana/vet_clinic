import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { AnimalType } from '../entities/animal.entity';
import { Owner } from '../../owner/owner.entity';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
      animal_type: AnimalType;
      name: string;
      age: number;
      owner: Owner;
      visits:[];
}
