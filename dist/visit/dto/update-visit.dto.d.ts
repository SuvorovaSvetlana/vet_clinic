import { Animal } from 'src/animal/entities/animal.entity';
import { Vet } from 'src/vet/entities/vet.entity';
import { CreateVisitDto } from './create-visit.dto';
declare const UpdateVisitDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVisitDto>>;
export declare class UpdateVisitDto extends UpdateVisitDto_base {
    date: Date;
    vetName: string;
    vet: Vet;
    animalName: string;
    animal: Animal;
    visitPurpose: string;
}
export {};
