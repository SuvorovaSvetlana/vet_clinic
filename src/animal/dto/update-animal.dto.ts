import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { AnimalType } from '../entities/animal.entity';
import { Owner } from '../../owner/owner.entity';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
      animalType: AnimalType;
      breed: string;
      name: string;
      dateOfBirth: Date;
      foto: string;
      owner: Owner;
      visits:[];
}
