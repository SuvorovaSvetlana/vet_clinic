import { Animal } from "src/animal/entities/animal.entity";
import { Vet } from "src/vet/entities/vet.entity";
export declare class CreateVisitDto {
    date: Date;
    vetName: string;
    vet: Vet;
    animalName: string;
    animal: Animal;
    visitPurpose: string;
}
