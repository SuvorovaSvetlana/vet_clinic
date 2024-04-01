import { Animal } from "src/animal/entities/animal.entity";
import { Vet } from "src/vet/entities/vet.entity";
export declare class Visit {
    id: number;
    date: Date;
    vetName: string;
    animalName: string;
    visitPurpose: string;
    animal: Animal;
    vet: Vet;
}
