import { PartialType } from '@nestjs/mapped-types';
import { Animal } from '../../animal/entities/animal.entity';
import { Vet } from '../../vet/entities/vet.entity';

import { CreateVisitDto } from './create-visit.dto';

export class UpdateVisitDto extends PartialType(CreateVisitDto) {
      date: string;
      vet: Vet;
      animal: Animal;
}
